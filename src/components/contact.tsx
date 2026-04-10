"use client";

import { useState } from "react";
import { MessageCircle, Phone, AtSign, Loader2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

const GERARDO_PHONE = "523222111574";
const WHATSAPP_CTA_URL =
  "https://wa.me/523222111574?text=Hola%20Gerardo%2C%20quiero%20iniciar%20una%20asesor%C3%ADa";

function buildWhatsAppUrl(data: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  const lines = [
    `Hola Gerardo, te contacto desde tu sitio web.`,
    ``,
    `Nombre: ${data.name}`,
    `Teléfono: ${data.phone}`,
    `Email: ${data.email}`,
    ``,
    `Mensaje: ${data.message}`,
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${GERARDO_PHONE}?text=${text}`;
}

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: (formData.get("name") as string).trim(),
      phone: (formData.get("phone") as string).trim(),
      email: (formData.get("email") as string).trim(),
      message: (formData.get("message") as string).trim(),
    };

    // Save to Supabase (backup) — don't block on failure
    supabase.from("contact_submissions").insert(data).then(() => {});

    // Open WhatsApp with pre-filled message
    window.open(buildWhatsAppUrl(data), "_blank", "noopener,noreferrer");

    setSubmitting(false);
  }

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <BlurFade delay={0.1} inView>
              <p className="font-sans text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Contacto
              </p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                Hablemos de tu
                <br />
                futuro patrimonio.
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
                Estoy listo para brindarte una asesoría clara, honesta y sin
                &ldquo;letras chiquitas&rdquo;. Contáctame para evaluar tu perfil
                crediticio y encontrar la propiedad que mejor se alinee a tus
                metas.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_CTA_URL}
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
            </BlurFade>
          </div>

          {/* Right — Form */}
          <BlurFade delay={0.2} inView direction="right">
            <Card>
              <CardContent className="p-8 md:p-10">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Envíame un mensaje
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="group space-y-5"
                >
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      required
                      minLength={2}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Tu número de teléfono"
                      required
                      pattern="[\d\s\-\+\(\)]{7,20}"
                      title="Ingresa un número de teléfono válido"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="¿En qué puedo ayudarte?"
                      required
                      minLength={10}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 group-invalid:pointer-events-none group-invalid:opacity-50"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <MessageCircle size={16} />
                        Enviar por WhatsApp
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
