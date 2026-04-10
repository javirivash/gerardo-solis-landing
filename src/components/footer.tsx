import { AtSign, Phone, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-brand-dark text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-bold">Gerardo Solís</p>
            <p className="font-sans text-sm text-primary-foreground/60 mt-1">
              Bahía de Banderas y Riviera Nayarit
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/523222111574"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="tel:+523222111574"
              aria-label="Teléfono"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              <Phone size={20} />
            </a>
            <a
              href="https://instagram.com/Gerardo_solis_realtor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              <AtSign size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="font-sans text-xs text-primary-foreground/40">
            &copy; {year} Gerardo Solís. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
