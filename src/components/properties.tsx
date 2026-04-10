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

interface PropertyModel {
  name: string;
  type: string;
  bedrooms: number;
  price: string;
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
        price: "Desde $2,008,035 MXN",
      },
      {
        name: "Ámbar",
        type: "Departamento",
        bedrooms: 3,
        price: "Desde $1,476,520 MXN",
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
        price: "$2,583,295 – $2,633,545 MXN",
      },
      {
        name: "Diamante",
        type: "Casa premium",
        bedrooms: 3,
        price: "Desde $3,253,283 MXN",
      },
    ],
    sellingPhrase:
      "Invierte en un entorno residencial completo que combina plusvalía, confort y proyección a futuro.",
  },
];

function DevelopmentCard({ dev }: { dev: Development }) {
  return (
    <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Image placeholder */}
      <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
        <span className="font-sans text-sm text-foreground/30">
          Render del desarrollo
        </span>
      </div>

      <div className="p-8">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
          {dev.name}
        </h3>
        <p className="font-sans text-base text-foreground/60 mb-8">
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

        {/* Models table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground/50 pb-3">
                  Modelo
                </th>
                <th className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground/50 pb-3">
                  Tipo
                </th>
                <th className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground/50 pb-3">
                  <span className="inline-flex items-center gap-1">
                    <Bed size={14} />
                    Rec.
                  </span>
                </th>
                <th className="font-sans text-xs font-semibold uppercase tracking-wider text-foreground/50 pb-3">
                  Precio
                </th>
              </tr>
            </thead>
            <tbody>
              {dev.models.map((model) => (
                <tr
                  key={model.name}
                  className="border-b border-border/30 last:border-0"
                >
                  <td className="font-sans font-semibold text-foreground py-3">
                    {model.name}
                  </td>
                  <td className="font-sans text-sm text-foreground/60 py-3">
                    {model.type}
                  </td>
                  <td className="font-sans text-sm text-foreground/60 py-3">
                    {model.bedrooms}
                  </td>
                  <td className="font-sans text-sm font-medium text-primary py-3">
                    {model.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selling phrase */}
        <p className="font-sans text-sm italic text-foreground/50">
          {dev.sellingPhrase}
        </p>
      </div>
    </div>
  );
}

export default function Properties() {
  return (
    <section id="propiedades" className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Propiedades
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Desarrollos exclusivos
            <br />
            en Bahía de Banderas.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {developments.map((dev) => (
            <DevelopmentCard key={dev.name} dev={dev} />
          ))}
        </div>
      </div>
    </section>
  );
}
