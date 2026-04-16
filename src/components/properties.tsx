"use client";

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
  Bath,
  Car,
  Sofa,
  Gem,
  Key,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ExpandableCard } from "@/components/ui/expandable-card";

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
  image: string;
  amenities: { icon: React.ElementType; label: string }[];
  models: PropertyModel[];
  sellingPhrase: string;
}

const developments: Development[] = [
  {
    name: "Verea Residencial",
    description: "Venta directa · llave en mano · premium",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    amenities: [
      { icon: Sofa, label: "Entrega totalmente amueblada" },
      { icon: Key, label: "Llave en mano — habita o renta de inmediato" },
      { icon: Gem, label: "Acabados en granito y cristal templado" },
      { icon: Bed, label: "3 recámaras" },
      { icon: Bath, label: "2.5 baños" },
      { icon: Car, label: "Cochera para 2 autos" },
      { icon: MapPin, label: "Nuevo Nayarit, Rincón del Cielo" },
    ],
    models: [
      {
        name: "Verea",
        type: "Casa premium — llave en mano",
        bedrooms: 3,
        priceValue: 4500000,
        priceLabel: "$4,500,000 MXN",
        priceRange: false,
      },
    ],
    sellingPhrase:
      "Valor integral: ahorro en equipamiento, practicidad de entrega y la posibilidad de habitar o rentar de inmediato. Abierto a ofertas serias de contado o mediante crédito bancario.",
  },
  {
    name: "Altavela Diamante",
    description:
      "Elegancia superior en San Vicente",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
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
  {
    name: "Zafiro Residencial",
    description:
      "Exclusividad accesible en Mezcales, Nayarit",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
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
];

function PriceDisplay({ model }: { model: PropertyModel }) {
  // Explicit price range string
  if (model.priceRange === true) {
    return (
      <span className="font-sans text-sm font-medium text-primary">
        {model.priceLabel}
      </span>
    );
  }

  // Exact fixed price — no "Desde" prefix
  if (model.priceRange === false) {
    return (
      <span className="font-sans text-sm font-medium text-primary">
        $
        <NumberTicker
          value={model.priceValue}
          className="text-sm font-medium text-primary"
        />{" "}
        MXN
      </span>
    );
  }

  // Default: "Desde" + ticker
  return (
    <span className="font-sans text-sm font-medium text-primary">
      Desde $
      <NumberTicker
        value={model.priceValue}
        className="text-sm font-medium text-primary"
      />{" "}
      MXN
    </span>
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

        <div className="flex flex-col gap-8">
          {developments.map((dev, index) => (
            <BlurFade key={dev.name} delay={0.15 * index} inView>
              <ExpandableCard
                title={dev.name}
                src={dev.image}
                description={dev.description}
                classNameExpanded="[&_h4]:font-sans [&_h4]:text-foreground [&_h4]:font-semibold [&_h4]:text-base"
              >
                {/* Amenities */}
                <h4>Amenidades</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  {dev.amenities.map((amenity) => (
                    <div
                      key={amenity.label}
                      className="flex items-center gap-3 text-sm"
                    >
                      <amenity.icon
                        size={18}
                        className="text-primary shrink-0"
                      />
                      <span className="font-sans">{amenity.label}</span>
                    </div>
                  ))}
                </div>

                {/* Models */}
                <h4>Modelos disponibles</h4>
                <div className="w-full space-y-4">
                  {dev.models.map((model) => (
                    <div
                      key={model.name}
                      className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-sans font-semibold text-foreground">
                          {model.name}
                        </span>
                        <Badge
                          variant="secondary"
                          className="font-sans text-xs"
                        >
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
                <p className="italic text-sm mt-2">{dev.sellingPhrase}</p>
              </ExpandableCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
