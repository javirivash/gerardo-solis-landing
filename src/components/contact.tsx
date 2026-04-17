"use client";

import { useState, useCallback } from "react";
import { MessageCircle, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BlurFade } from "@/components/ui/blur-fade";
import { supabase } from "@/lib/supabase";
import {
  GERARDO_PHONE,
  GERARDO_PHONE_DISPLAY,
  GERARDO_PHONE_TEL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "@/lib/constants";

const PHONE_PATTERN = /^[\d\s\-+()]{7,20}$/;

type FieldName = "name" | "phone" | "email" | "message";

type FieldErrors = Partial<Record<FieldName, string>>;
type TouchedFields = Partial<Record<FieldName, boolean>>;

function validate(values: Record<FieldName, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name || values.name.length < 5)
    errors.name = "Ingresa tu nombre (mínimo 5 caracteres)";
  if (!values.phone || !PHONE_PATTERN.test(values.phone))
    errors.phone = "Ingresa un número válido (7–20 dígitos)";
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Ingresa un correo electrónico válido";
  if (!values.message || values.message.length < 10)
    errors.message = "Escribe un mensaje (mínimo 10 caracteres)";
  return errors;
}

function buildWhatsAppUrl(data: Record<FieldName, string>) {
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

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-sm text-destructive mt-1">
      {message}
    </p>
  );
}

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [touched, setTouched] = useState<TouchedFields>({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const markTouched = useCallback((field: FieldName) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  function getValues(form: HTMLFormElement): Record<FieldName, string> {
    const fd = new FormData(form);
    return {
      name: (fd.get("name") as string).trim(),
      phone: (fd.get("phone") as string).trim(),
      email: (fd.get("email") as string).trim(),
      message: (fd.get("message") as string).trim(),
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = getValues(form);
    const fieldErrors = validate(data);

    setTouched({ name: true, phone: true, email: true, message: true });
    setSubmitted(true);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) return;

    setSubmitting(true);

    try {
      await supabase.from("contact_submissions").insert(data);
    } catch {
      // Non-blocking — WhatsApp is the primary channel
    }

    window.open(buildWhatsAppUrl(data), "_blank", "noopener,noreferrer");

    setSubmitting(false);
    setSuccess(true);
    form.reset();
    setTouched({});
    setSubmitted(false);
  }

  function resetSuccess() {
    setSuccess(false);
  }

  function getVisibleErrors(form: HTMLFormElement | null): FieldErrors {
    if (!form) return {};
    const data = getValues(form);
    const all = validate(data);
    const visible: FieldErrors = {};
    for (const key of Object.keys(all) as FieldName[]) {
      if (touched[key] || submitted) visible[key] = all[key];
    }
    return visible;
  }

  function handleBlurOrChange(form: HTMLFormElement | null) {
    setErrors(getVisibleErrors(form));
  }

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <BlurFade delay={0.1} inView>
              <p className="font-sans text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Contacto
              </p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6 text-balance">
                Hablemos de tu
                <br />
                futuro patrimonio.
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-10 text-pretty">
                Estoy listo para brindarte una asesoría clara, honesta y sin
                &ldquo;letras chiquitas&rdquo;. Contáctame para evaluar tu perfil
                crediticio y encontrar la propiedad que mejor se alinee a tus
                metas.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              {/* Contact details */}
              <div className="space-y-4">
                <a
                  href={GERARDO_PHONE_TEL}
                  className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Phone size={18} className="text-primary" />
                  {GERARDO_PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <FaInstagram size={18} className="text-primary" />
                  @{INSTAGRAM_HANDLE}
                </a>
              </div>
            </BlurFade>
          </div>

          {/* Right — Form */}
          <BlurFade delay={0.2} inView direction="right">
            <Card>
              <CardContent className="p-8 md:p-10">
                {success ? (
                  <div
                    className="flex flex-col items-start gap-4 py-4"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 size={28} className="text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty">
                      Abrí WhatsApp con tu mensaje prellenado. Si no se abrió
                      automáticamente, revisa tu navegador o vuelve a
                      intentarlo.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={resetSuccess}
                      className="mt-2"
                    >
                      Enviar otro mensaje
                    </Button>
                  </div>
                ) : (
                  <>
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Envíame un mensaje
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary">*</span> Obligatorio
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  onChange={(e) => handleBlurOrChange(e.currentTarget)}
                  onBlur={(e) => {
                    const target = e.target as unknown as { name?: string };
                    const field = target.name as FieldName | undefined;
                    if (field) markTouched(field);
                    handleBlurOrChange(e.currentTarget);
                  }}
                  className="space-y-5"
                  noValidate
                  aria-busy={submitting}
                >
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Nombre completo <span className="text-primary">*</span></Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    <FieldError id="name-error" message={errors.name} />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Teléfono <span className="text-primary">*</span></Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Tu número de teléfono"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    <FieldError id="phone-error" message={errors.phone} />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Correo electrónico <span className="text-primary">*</span></Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    <FieldError id="email-error" message={errors.email} />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Mensaje <span className="text-primary">*</span></Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="¿En qué puedo ayudarte?"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    <FieldError id="message-error" message={errors.message} />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2"
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
                  </>
                )}
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
