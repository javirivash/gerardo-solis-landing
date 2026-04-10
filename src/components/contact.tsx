"use client";

import { MessageCircle, Phone, AtSign } from "lucide-react";

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
            <p className="font-sans text-base md:text-lg text-foreground/70 leading-relaxed mb-10">
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
              className="inline-flex items-center gap-3 bg-accent text-on-primary px-8 py-4 rounded-lg font-sans text-base font-semibold hover:opacity-90 hover:-translate-y-px transition-all duration-200 cursor-pointer shadow-md mb-10"
            >
              <MessageCircle size={20} />
              Iniciar asesoría personalizada
            </a>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="tel:+523222111574"
                className="flex items-center gap-3 font-sans text-sm text-foreground/60 hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                <Phone size={18} className="text-primary" />
                322 211 1574
              </a>
              <a
                href="https://instagram.com/Gerardo_solis_realtor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-sm text-foreground/60 hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                <AtSign size={18} className="text-primary" />
                @Gerardo_solis_realtor
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-10 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Envíame un mensaje
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-sm font-medium text-foreground/70 mb-1.5"
                >
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-base text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-sans text-sm font-medium text-foreground/70 mb-1.5"
                >
                  Teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Tu número de teléfono"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-base text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-sm font-medium text-foreground/70 mb-1.5"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-base text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-sm font-medium text-foreground/70 mb-1.5"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="¿En qué puedo ayudarte?"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-base text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-primary text-on-primary font-sans text-base font-semibold hover:opacity-90 hover:-translate-y-px transition-all duration-200 cursor-pointer"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
