"use client";

import { SERVICES } from "@/data/content";

const colorConfig = {
  cyan: {
    text: "#00e5ff",
    border: "rgba(0,229,255,0.2)",
    bg: "rgba(0,229,255,0.06)",
    dot: "#00e5ff",
  },
  orange: {
    text: "#ff8f00",
    border: "rgba(255,109,0,0.2)",
    bg: "rgba(255,109,0,0.06)",
    dot: "#ff6d00",
  },
  violet: {
    text: "#9d5cff",
    border: "rgba(123,47,255,0.2)",
    bg: "rgba(123,47,255,0.06)",
    dot: "#7b2fff",
  },
};

const ServiceIcons = {
  cube: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  gear: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  star: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 relative"
      style={{ background: "#050510" }}
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest text-[#ff8f00] mb-4 uppercase"
            style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
          >
            // nuestros servicios
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#e8eaf6] mb-4"
            style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
          >
            ¿Qué Fabricamos?
          </h2>
          <p className="text-[#546e7a] text-sm sm:text-base max-w-2xl mx-auto">
            Desde el prototipado rápido hasta piezas técnicas de alta complejidad, cubrimos todo el
            ciclo de fabricación digital con precisión y calidad.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const cfg = colorConfig[service.color];
            return (
              <div
                key={service.id}
                className="group rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 cursor-default relative overflow-hidden"
                style={{
                  background: "#0f0f2a",
                  borderColor: "#1a1a3e",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = cfg.border;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px ${cfg.dot}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1a1a3e";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Indicator dot */}
                <div
                  className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full"
                  style={{ background: cfg.dot, boxShadow: `0 0 8px ${cfg.dot}` }}
                />

                {/* Number */}
                <div
                  className="absolute top-5 left-5 text-xs font-bold opacity-20"
                  style={{
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    color: cfg.text,
                  }}
                >
                  0{i + 1}
                </div>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mt-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: cfg.bg,
                    color: cfg.text,
                    border: `1px solid ${cfg.border}`,
                  }}
                >
                  {ServiceIcons[service.icon]}
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-bold text-[#e8eaf6] mb-3"
                  style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#90a4ae] text-sm leading-relaxed">{service.description}</p>

                {/* CTA hint */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-semibold" style={{ color: cfg.text }}>
                    Solicitar información
                  </span>
                  <svg
                    className="w-3 h-3"
                    style={{ color: cfg.text }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#546e7a] text-sm mb-4">
            ¿Tienes un proyecto diferente? ¡Cuéntanos!
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#00e5ff]/30 text-[#00e5ff] text-sm font-semibold hover:bg-[#00e5ff]/5 hover:border-[#00e5ff]/60 transition-all duration-200"
          >
            Contactar ahora
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
