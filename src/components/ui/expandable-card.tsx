"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!active) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusTimeout = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(false);
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.clearTimeout(focusTimeout);
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      previouslyFocused?.focus?.();
    };
  }, [active]);

  const titleId = `card-title-${id}`;

  return (
    <>
      {mounted && createPortal(
        <>
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/60 backdrop-blur-md h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {active && (
              <div
                className="fixed inset-0 grid place-items-center z-50 sm:mt-16 before:pointer-events-none"
              >
                <motion.div
                  layoutId={`card-${title}-${id}`}
                  ref={cardRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={titleId}
                  className={cn(
                    "w-full max-w-[850px] h-full flex flex-col overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] sm:rounded-t-3xl bg-card shadow-sm relative",
                    classNameExpanded,
                  )}
                >
                  <motion.div layoutId={`image-${title}-${id}`}>
                    <div className="relative h-80 before:absolute before:inset-x-0 before:bottom-[-1px] before:h-[70px] before:z-50 before:bg-gradient-to-t before:from-card">
                      <Image
                        src={src}
                        alt={title}
                        fill
                        sizes="(max-width: 850px) 100vw, 850px"
                        className="object-cover object-center"
                      />
                    </div>
                  </motion.div>
                  <div className="relative h-full before:fixed before:inset-x-0 before:bottom-0 before:h-[70px] before:z-50 before:bg-gradient-to-t before:from-card">
                    <div className="flex justify-between items-start p-8 h-auto">
                      <div>
                        <motion.p
                          layoutId={`description-${description}-${id}`}
                          className="text-muted-foreground text-lg"
                        >
                          {description}
                        </motion.p>
                        <motion.h3
                          id={titleId}
                          layoutId={`title-${title}-${id}`}
                          className="font-semibold text-foreground text-4xl sm:text-4xl mt-0.5"
                        >
                          {title}
                        </motion.h3>
                      </div>
                      <motion.button
                        ref={closeButtonRef}
                        type="button"
                        aria-label="Cerrar"
                        layoutId={`button-${title}-${id}`}
                        className="size-10 shrink-0 flex items-center justify-center rounded-full bg-card text-foreground/70 border border-border hover:text-foreground hover:border-foreground/30 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        onClick={() => setActive(false)}
                      >
                        <motion.div
                          animate={{ rotate: active ? 45 : 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                        </motion.div>
                      </motion.button>
                    </div>
                    <div className="relative px-6 sm:px-8">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-muted-foreground text-base pb-10 flex flex-col items-start gap-4 overflow-auto"
                      >
                        {children}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>,
        document.body,
      )}

      <motion.div
        ref={triggerRef}
        role="button"
        tabIndex={0}
        aria-label={`Ver detalles de ${title}`}
        aria-expanded={active}
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActive(true);
          }
        }}
        className={cn(
          "w-full flex flex-col sm:flex-row bg-card shadow-sm rounded-2xl cursor-pointer border border-border overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className,
        )}
      >
        <motion.div
          layoutId={`image-${title}-${id}`}
          className="sm:basis-[61.8%] shrink-0 relative h-56 sm:h-72"
        >
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 62vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="flex flex-1 flex-col justify-between gap-4 p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <motion.p
              layoutId={`description-${description}-${id}`}
              className="text-muted-foreground text-sm font-medium"
            >
              {description}
            </motion.p>
            <motion.h3
              layoutId={`title-${title}-${id}`}
              className="text-foreground font-semibold text-2xl sm:text-3xl"
            >
              {title}
            </motion.h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">
              Toca para ver detalles
            </span>
            <motion.span
              aria-hidden="true"
              layoutId={`button-${title}-${id}`}
              className="size-8 shrink-0 flex items-center justify-center rounded-full bg-card text-foreground/70 border border-border transition-colors duration-200"
            >
              <motion.div
                animate={{ rotate: active ? 45 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
