import { MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ScrollExpansionHero } from "@/components/ui/scroll-expansion-hero";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL_PREQUALIFY } from "@/lib/constants";

export default function Hero() {
  return (
    <ScrollExpansionHero
      mediaSrc="/hero-aerial.mp4"
      bgImageSrc="/hero-image-2.jpg"
      title="Convierte tu crédito"
      titleAccent="en un patrimonio real."
    >
      <div className="mx-auto max-w-3xl text-center">
        <BlurFade delay={0.1} inView>
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8">
            <AnimatedShinyText className="text-sm font-sans font-medium text-primary" shimmerWidth={150}>
              Asesor Inmobiliario Certificado
            </AnimatedShinyText>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Como experto en ingeniería financiera patrimonial, te ayudo a dejar de
            pagar renta y a construir estabilidad mediante una compra inteligente y
            segura.
          </p>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <a
            href={WHATSAPP_URL_PREQUALIFY}
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
        </BlurFade>
      </div>
    </ScrollExpansionHero>
  );
}
