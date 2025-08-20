import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Landing futurista, centrada, mobile-first, con animaciones Framer Motion.
 * Colores crema / cielo muy claro, totalmente responsive y accesible.
 * Incluye hueco para el cartel (cuadrado) y CTAs.
 *
 * Tecnologías: React + Tailwind + Framer Motion
 * - Accesibilidad: semántica, aria-labels, contraste, reduced-motion
 * - SEO: microdatos JSON-LD del evento
 * - Rendimiento: imágenes lazy, tamaños fluidos, tipografía del sistema
 */

const bg = "bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.9),rgba(248,240,220,0.95)_35%,rgba(245,232,200,0.95)_60%,rgba(238,223,188,0.95))]";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

function CrossIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10.5 2.5h3v6.9h7v3h-7v8.1h-3v-8.1h-7v-3h7V2.5z" fill="currentColor" />
    </svg>
  );
}

function Section({ children, i = 0, className = "" }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.section
      initial={prefersReduced ? undefined : "hidden"}
      whileInView={prefersReduced ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      custom={i}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function HakunaBusLanding() {
  // JSON-LD para SEO
  useEffect(() => {
    const json = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Concierto Hakuna + Siempre Así (viaje en bus)",
      startDate: "2025-09-06T16:00:00+02:00",
      endDate: "2025-09-07T00:30:00+02:00",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Rivas (Madrid)",
        address: "Rivas-Vaciamadrid, Madrid, España"
      },
      offers: {
        "@type": "Offer",
        price: "55",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdWhpHyU9nUMgeXOhHtZL4BGt9y8i5bovJFpaaMw6hE4KWgig/viewform?usp=header"
      },
      organizer: { "@type": "Organization", name: "Grupo de amigos (no oficial)" }
    };

    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(json);
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, []);

  return (
    <main className={`${bg} min-h-dvh text-neutral-900 antialiased selection:bg-amber-200/60 selection:text-black`}> 
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* CABECERA */}
        <header className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-3 text-amber-700">
            <CrossIcon className="w-7 h-7" />
            <span className="tracking-[0.2em] text-xs font-semibold uppercase">Adoración · Alegría · Camino</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Concierto <span className="text-amber-700">Hakuna</span> + Siempre Así
          </h1>
          <p className="text-base sm:text-lg text-neutral-700">
            🚌 Salimos en bus · Evento no organizado oficialmente por Hakuna
          </p>
        </header>

        {/* HERO / CTA */}
        <Section i={0} className="mt-8 sm:mt-12 grid md:grid-cols-[1.1fr,0.9fr] gap-6 items-center">
          {/* Texto principal */}
          <div className="space-y-5">
            <div className="rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 p-5 backdrop-blur">
              <ul className="text-sm sm:text-base leading-relaxed">
                <li className="flex gap-3"><span className="shrink-0">📅</span> <span>6 <strong>septiembre 2025</strong> — <strong>Rivas (Madrid)</strong></span></li>
                <li className="flex gap-3"><span className="shrink-0">🎟️</span> <span>Viaje <strong>ida y vuelta</strong> hasta el recinto del concierto.</span></li>
                <li className="flex gap-3"><span className="shrink-0">💶</span> <span><strong>PVP: 55 €</strong> · <em>No incluye entrada al concierto</em></span></li>
                <li className="flex gap-3"><span className="shrink-0">🏦</span> <span>Ingreso en cuenta: <code className="font-mono tracking-wide">ES57 2100 8522 2002 0046 0732</code></span></li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdWhpHyU9nUMgeXOhHtZL4BGt9y8i5bovJFpaaMw6hE4KWgig/viewform?usp=header"
                target="_blank" rel="noopener noreferrer"
                aria-label="Abrir formulario de preinscripción"
                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-amber-600 text-white font-semibold shadow hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                Preinscribirme ahora
              </a>
              <a
                href="#recorrido"
                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-white text-neutral-900 font-semibold shadow ring-1 ring-black/10 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                Ver recorrido
              </a>
            </div>

            <p className="text-sm text-neutral-700">
              ⚠️ <strong>Importante:</strong> Se debe cubrir el <strong>90%</strong> de las plazas del autobús. Si no se realiza, se devolverá el importe.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white/70 ring-1 ring-black/5 p-4">
                <p className="text-sm">⿡ <strong>Fecha límite preinscripción:</strong> 27 de agosto</p>
              </div>
              <div className="rounded-xl bg-white/70 ring-1 ring-black/5 p-4">
                <p className="text-sm">⿢ <strong>Fecha límite pago:</strong> 31 de agosto</p>
              </div>
            </div>
          </div>

          {/* Placeholder cartel cuadrado */}
          <div className="flex justify-center">
            <figure className="w-full aspect-square max-w-sm rounded-3xl border-2 border-dashed border-amber-400/70 bg-amber-50/70 grid place-content-center text-center p-6 shadow-inner">
              <div>
                <div className="mx-auto w-16 h-16 rounded-xl bg-amber-200/60 grid place-content-center text-amber-800 mb-3">
                  <CrossIcon className="w-8 h-8" />
                </div>
                <figcaption className="text-sm sm:text-base text-neutral-700">
                  Aquí irá <strong>tu cartel</strong> o <strong>QR</strong> (arrástralo o reemplázalo en producción).
                </figcaption>
              </div>
            </figure>
          </div>
        </Section>

        {/* RECORRIDO */}
        <Section i={1} className="mt-12" id="recorrido">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Recorrido y paradas (orientativo)</h2>
          <ol className="relative border-s-2 border-amber-300 mx-auto max-w-2xl pl-6 space-y-5">
            {[
              { t: "07:30", d: "Puerto de Santa María (estación tren)" },
              { t: "08:00", d: "Jerez de la Frontera (Carrefour Sur)" },
              { t: "09:00", d: "Sevilla", link: "https://maps.app.goo.gl/6LB4HGshqgg3Eddf7?g_st=aw" },
              { t: "10:00", d: "Parada desayuno" },
              { t: "10:30", d: "Seguimos viaje" },
              { t: "11:00", d: "Córdoba", link: "https://maps.app.goo.gl/2hQtUUrZVmSA3Y6G9?g_st=aw" },
              { t: "13:30", d: "Parada almuerzo" },
              { t: "14:30", d: "Continuamos viaje" },
              { t: "16:00", d: "Llegada a Rivas" },
              { t: "00:30", d: "Salida vuelta" },
              { t: "09:00", d: "Llegada a Puerto de Santa María" },
            ].map((s, idx) => (
              <li key={idx} className="ms-4">
                <div className="absolute -start-3.5 mt-1 w-3 h-3 rounded-full bg-amber-500 shadow" aria-hidden="true" />
                <div className="rounded-xl bg-white/80 ring-1 ring-black/5 p-3 shadow-sm">
                  <p className="text-sm font-semibold text-amber-800">{s.t}</p>
                  <p className="text-sm sm:text-base">
                    {s.link ? (
                      <a href={s.link} target="_blank" rel="noopener noreferrer" className="underline decoration-amber-500 underline-offset-2">
                        {s.d} · Mapa
                      </a>
                    ) : (
                      s.d
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* CTA FINAL */}
        <Section i={2} className="mt-12">
          <div className="mx-auto max-w-2xl text-center rounded-3xl bg-gradient-to-br from-amber-200/70 to-amber-100/70 p-6 sm:p-8 ring-1 ring-black/5 shadow">
            <p className="text-lg sm:text-xl font-semibold mb-3">¿Te apuntas al viaje?</p>
            <p className="text-sm sm:text-base text-neutral-700 mb-5">Rellena la preinscripción y reserva tu plaza. ¡Nos vemos en Rivas!</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdWhpHyU9nUMgeXOhHtZL4BGt9y8i5bovJFpaaMw6hE4KWgig/viewform?usp=header"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-amber-700 text-white font-semibold shadow hover:bg-amber-800 focus-visible:ring-2 focus-visible:ring-amber-600"
            >
              Abrir formulario
            </a>
          </div>
        </Section>

        {/* PIE */}
        <footer className="mt-10 sm:mt-14 text-center text-xs text-neutral-600">
          <p>No organizado oficialmente por Hakuna. Información sujeta a cambios.</p>
        </footer>
      </div>
    </main>
  );
}
