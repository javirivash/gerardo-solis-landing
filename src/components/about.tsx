import { ShieldCheck, BadgeDollarSign, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Créditos Estratégicos",
    description:
      "Asesoría integral en créditos Infonavit, Fovissste y esquemas bancarios estratégicos.",
  },
  {
    icon: BadgeDollarSign,
    title: "Estrategia Cero Enganche",
    description:
      "Especialista en optimizar la inversión inicial del cliente para maximizar su patrimonio.",
  },
  {
    icon: MapPin,
    title: "Experto Regional",
    description:
      "Conocimiento profundo de zonas de alta plusvalía como Mezcales, San Vicente y Nuevo Nayarit.",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <BlurFade delay={0.1} inView>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Sobre Mí
            </p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-8">
              Tu asesor inmobiliario
              <br />
              de confianza.
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="space-y-4 font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Gerardo Solís es un Asesor Inmobiliario Certificado especializado
                en ingeniería financiera patrimonial, con un enfoque en convertir
                la capacidad de crédito en activos rentables.
              </p>
              <p>
                Con una sólida reputación en la región de Bahía de Banderas, basa
                su servicio en la honestidad radical, la transparencia y un
                seguimiento cercano que garantiza decisiones financieras
                sostenibles.
              </p>
              <p>
                Su misión es acompañar a familias y profesionales en el camino
                hacia la estabilidad financiera, eliminando la incertidumbre del
                proceso de compraventa.
              </p>
            </div>
          </BlurFade>
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <BlurFade key={item.title} delay={0.15 * index} inView>
              <Card className="h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* Tagline */}
        <BlurFade delay={0.2} inView>
          <blockquote className="mt-16 border-l-4 border-primary pl-6 py-2">
            <p className="font-serif text-xl md:text-2xl text-foreground/80 italic">
              &ldquo;Los pequeños detalles marcan mucho la diferencia.&rdquo;
            </p>
            <cite className="block mt-3 font-sans text-sm text-muted-foreground not-italic">
              — Gerardo Solís
            </cite>
          </blockquote>
        </BlurFade>
      </div>
    </section>
  );
}
