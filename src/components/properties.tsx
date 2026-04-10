import {
  Waves,
  ShieldCheck,
  MapPin,
  Trees,
  Building2,
  Bike,
  Store,
  Dumbbell,
  Users,
  Bed,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";

interface PropertyModel {
  name: string;
  type: string;
  bedrooms: number;
  priceValue: number;
  priceLabel: string;
  priceRange?: boolean;
}

interface Development {
  name: string;
  description: string;
  amenities: { icon: React.ElementType; label: string }[];
  models: PropertyModel[];
  sellingPhrase: string;
}

const developments: Development[] = [
  {
    name: "Zafiro Residencial",
    description:
      "Exclusividad accesible y diseño funcional en el corazón de Mezcales, Nayarit.",
    amenities: [
      { icon: Waves, label: "Alberca con Casa Club" },
      { icon: ShieldCheck, label: "Coto privado con seguridad" },
      { icon: MapPin, label: "A 20 min de las playas" },
      { icon: Building2, label: "Zona de alta plusvalía" },
      { icon: Trees, label: "Áreas verdes" },
    ],
    models: [
      {
        name: "Cuarzo",
        type: "Casa unifamiliar",
        bedrooms: 3,
        priceValue: 2008035,
        priceLabel: "Desde $2,008,035 MXN",
      },
      {
        name: "Ámbar",
        type: "Departamento",
        bedrooms: 3,
        priceValue: 1476520,
        priceLabel: "Desde $1,476,520 MXN",
      },
    ],
    sellingPhrase:
      "Vive el mejor momento para ti y tu familia en un espacio diseñado para tu bienestar y crecimiento patrimonial.",
  },
  {
    name: "Altavela Diamante",
    description:
      "Elegancia y estilo de vida superior en la zona de mayor crecimiento de San Vicente.",
    amenities: [
      { icon: Waves, label: "Alberca con terraza y Casa Club" },
      { icon: Bike, label: "Ciclovía y trotapista" },
      { icon: Store, label: "Zona comercial integrada" },
      { icon: Dumbbell, label: "Canchas y juegos infantiles" },
      { icon: Users, label: "Espacios de convivencia" },
    ],
    models: [
      {
        name: "Obsidiana",
        type: "Casa unifamiliar",
        bedrooms: 3,
        priceValue: 2583295,
        priceLabel: "$2,583,295 – $2,633,545 MXN",
        priceRange: true,
      },
      {
        name: "Diamante",
        type: "Casa premium",
        bedrooms: 3,
        priceValue: 3253283,
        priceLabel: "Desde $3,253,283 MXN",
      },
    ],
    sellingPhrase:
      "Invierte en un entorno residencial completo que combina plusvalía, confort y proyección a futuro.",
  },
];

function PriceDisplay({ model }: { model: PropertyModel }) {
  if (model.priceRange) {
    return (
      <span className="font-sans text-sm font-medium text-primary">
        {model.priceLabel}
      </span>
    );
  }

  return (
    <span className="font-sans text-sm font-medium text-primary">
      Desde $<NumberTicker value={model.priceValue} className="text-sm font-medium text-primary" /> MXN
    </span>
  );
}

function DevelopmentCard({ dev }: { dev: Development }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Image placeholder */}
      <div className="aspect-[16/9] bg-gradient-to-br from-brand-dark/5 to-primary/10 flex items-center justify-center">
        <span className="font-sans text-sm text-muted-foreground/50">
          Render del desarrollo
        </span>
      </div>

      <CardContent className="p-8">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
          {dev.name}
        </h3>
        <p className="font-sans text-base text-muted-foreground mb-8">
          {dev.description}
        </p>

        {/* Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {dev.amenities.map((amenity) => (
            <div
              key={amenity.label}
              className="flex items-center gap-3 text-sm text-foreground/70"
            >
              <amenity.icon size={18} className="text-primary shrink-0" />
              <span className="font-sans">{amenity.label}</span>
            </div>
          ))}
        </div>

        {/* Models */}
        <div className="space-y-4 mb-8">
          {dev.models.map((model) => (
            <div
              key={model.name}
              className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-0"
            >
              <div className="flex items-center gap-3">
                <span className="font-sans font-semibold text-foreground">
                  {model.name}
                </span>
                <Badge variant="secondary" className="font-sans text-xs">
                  {model.type}
                </Badge>
              </div>
              <div className="text-right">
                <PriceDisplay model={model} />
                <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground mt-0.5">
                  <Bed size={12} />
                  {model.bedrooms} rec.
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selling phrase */}
        <p className="font-sans text-sm italic text-muted-foreground">
          {dev.sellingPhrase}
        </p>
      </CardContent>
    </Card>
  );
}

export default function Properties() {
  return (
    <section id="propiedades" className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <BlurFade delay={0.1} inView>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Propiedades
            </p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Desarrollos exclusivos
              <br />
              en Bahía de Banderas.
            </h2>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {developments.map((dev, index) => (
            <BlurFade key={dev.name} delay={0.15 * index} inView>
              <DevelopmentCard dev={dev} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
