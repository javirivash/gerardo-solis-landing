"use client";

import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface ScrollExpansionHeroProps {
  mediaSrc: string;
  bgImageSrc?: string;
  title: string;
  titleAccent?: string;
  scrollHint?: string;
  children?: ReactNode;
}

export function ScrollExpansionHero({
  mediaSrc,
  bgImageSrc,
  title,
  titleAccent,
  scrollHint = "Desliza para explorar",
  children,
}: ScrollExpansionHeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest?.(
        'a[href^="#"]'
      );
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href !== "#inicio" && !mediaFullyExpanded) {
        setMediaFullyExpanded(true);
        setShowContent(true);
        setScrollProgress(1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("click", handleAnchorClick, true);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  return (
    <div className="transition-colors duration-700 ease-in-out overflow-x-hidden">
      <section id="inicio" className="relative flex flex-col items-center justify-start min-h-dvh">
        <div className="relative w-full flex flex-col items-center min-h-dvh">
          {/* Background image that fades as video expands */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            {bgImageSrc ? (
              <Image
                src={bgImageSrc}
                alt=""
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-brand-dark" />
            )}
            <div className="absolute inset-0 bg-brand-dark/30" />
          </motion.div>

          <div className="mx-auto max-w-6xl w-full px-6 flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-dvh relative">
              {/* Expanding video */}
              <div
                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="relative w-full h-full pointer-events-none">
                  <video
                    src={mediaSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    className="w-full h-full object-cover rounded-xl"
                    controls={false}
                    disablePictureInPicture
                    disableRemotePlayback
                  />
                  <motion.div
                    className="absolute inset-0 bg-brand-dark/30 rounded-xl"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                {/* Scroll hint below video */}
                <div className="flex flex-col items-center text-center relative z-10 mt-4">
                  {scrollHint && (
                    <motion.p
                      className="font-sans text-sm text-primary-foreground/60 font-medium"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                      animate={{ opacity: scrollProgress > 0.1 ? 0 : 1 }}
                    >
                      {scrollHint}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Title text that splits on scroll */}
              <h1 className="flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col [text-shadow:_0_2px_12px_rgba(0,0,0,0.7)] font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
                <motion.span
                  className="text-white"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {title}
                </motion.span>
                {titleAccent && (
                  <motion.span
                    className="text-primary [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {titleAccent}
                  </motion.span>
                )}
              </h1>
            </div>

            {/* Content revealed after full expansion */}
            <motion.section
              className="flex flex-col w-full py-10 lg:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}
