import { AtSign, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-on-primary">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-bold">Gerardo Solís</p>
            <p className="font-sans text-sm text-on-primary/60 mt-1">
              Bahía de Banderas y Riviera Nayarit
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/523222111574"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-lg text-on-primary/60 hover:text-on-primary hover:bg-on-primary/10 transition-colors duration-200 cursor-pointer"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="tel:+523222111574"
              aria-label="Teléfono"
              className="p-2 rounded-lg text-on-primary/60 hover:text-on-primary hover:bg-on-primary/10 transition-colors duration-200 cursor-pointer"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://instagram.com/Gerardo_solis_realtor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-lg text-on-primary/60 hover:text-on-primary hover:bg-on-primary/10 transition-colors duration-200 cursor-pointer"
            >
              <AtSign size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-on-primary/10 text-center">
          <p className="font-sans text-xs text-on-primary/40">
            &copy; {year} Gerardo Solís. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
