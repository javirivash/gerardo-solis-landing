import { Phone, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  GERARDO_PHONE_TEL,
  INSTAGRAM_URL,
  NAV_LINKS,
  WHATSAPP_URL_ADVISORY,
} from "@/lib/constants";

const iconLinkClass = cn(
  buttonVariants({ variant: "ghost", size: "icon" }),
  "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-brand-dark text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-bold">Gerardo Solís</p>
            <p className="font-sans text-sm text-primary-foreground/60 mt-1">
              Bahía de Banderas y Riviera Nayarit
            </p>
          </div>

          <nav
            aria-label="Navegación del pie de página"
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 justify-center md:justify-end">
            <a
              href={WHATSAPP_URL_ADVISORY}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={iconLinkClass}
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={GERARDO_PHONE_TEL}
              aria-label="Teléfono"
              className={iconLinkClass}
            >
              <Phone size={20} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={iconLinkClass}
            >
              <FaInstagram size={20} />
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
