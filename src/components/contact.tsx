"use client";

import { MessageCircle, Phone, AtSign } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const WHATSAPP_URL =
  "https://wa.me/523222111574?text=Hola%20Gerardo%2C%20quiero%20iniciar%20una%20asesor%C3%ADa";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Contacto
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Hablemos de tu
              <br />
              futuro patrimonio.
            </h2>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
              Estoy listo para brindarte una asesoría clara, honesta y sin
              &ldquo;letras chiquitas&rdquo;. Contáctame para evaluar tu perfil
              crediticio y encontrar la propiedad que mejor se alinee a tus
              metas.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "px-8 py-4 h-auto text-base gap-3 shadow-md mb-10"
              )}
            >
              <MessageCircle size={20} />
              Iniciar asesoría personalizada
            </a>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="tel:+523222111574"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                <Phone size={18} className="text-primary" />
                322 211 1574
              </a>
              <a
                href="https://instagram.com/Gerardo_solis_realtor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                <AtSign size={18} className="text-primary" />
                @Gerardo_solis_realtor
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <Card>
            <CardContent className="p-8 md:p-10">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Envíame un mensaje
              </h3>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="space-y-1.5">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Tu número de teléfono"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
