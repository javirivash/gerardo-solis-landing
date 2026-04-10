import { MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/523222111574?text=Hola%20Gerardo%2C%20me%20interesa%20precalificarme";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      {/* Background placeholder — will be replaced with Gerardo's photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/5 via-background to-primary/5" />

      {/* Decorative gold accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-primary" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
        <h1 className="font-serif font-bold tracking-tight text-foreground text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] mb-8">
          Convierte tu crédito
          <br />
          <span className="text-primary">en un patrimonio real.</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Como experto en ingeniería financiera patrimonial, te ayudo a dejar de
          pagar renta y a construir estabilidad mediante una compra inteligente y
          segura.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "px-8 py-4 h-auto text-base gap-3 shadow-md"
          )}
        >
          <MessageCircle size={20} />
          Precalifícate por WhatsApp
        </a>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
