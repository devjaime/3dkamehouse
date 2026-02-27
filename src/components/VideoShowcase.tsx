"use client";

import { useState } from "react";

/**
 * VideoShowcase — sección que muestra los 3 videos explicativos de servicios.
 * Usa un tab panel para navegar entre los 3 tipos de trabajo.
 * Los videos están embebidos como <video> tags apuntando a los renders de Remotion.
 * Mientras no existan los mp4 generados, muestra un placeholder interactivo.
 */

const VIDEOS = [
  {
    id: "prototipado",
    title: "Prototipado Rápido",
    subtitle: "De la idea al objeto en horas",
    description:
      "Cada prototipo nace de un archivo digital y se convierte en realidad física capa por capa. Ideal para validar diseños, testear ergonomía y presentar conceptos antes de producción.",
    accentColor: "#00e5ff",
    borderColor: "rgba(0,229,255,0.25)",
    steps: [
      { step: "01", label: "Diseño CAD / STL",        time: "~2h" },
      { step: "02", label: "Slicing & Configuración",  time: "~30m" },
      { step: "03", label: "Impresión FDM",             time: "~6h" },
      { step: "04", label: "Control de Calidad",        time: "~30m" },
    ],
    videoSrc: "/videos/prototipado.mp4",
    renderCmd: "npm run render:prototipado",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    id: "piezas-tecnicas",
    title: "Piezas Técnicas",
    subtitle: "Ingeniería de precisión en cada capa",
    description:
      "Componentes funcionales con tolerancias de ±0.1mm para aplicaciones de ingeniería, mecánica y electrónica. Cada pieza pasa por verificación dimensional antes de entrega.",
    accentColor: "#ff8f00",
    borderColor: "rgba(255,109,0,0.25)",
    steps: [
      { step: "01", label: "Especificaciones Técnicas", time: "~1h" },
      { step: "02", label: "Ingeniería de Diseño",       time: "~4h" },
      { step: "03", label: "Fabricación de Precisión",   time: "~8h" },
      { step: "04", label: "Metrología & Entrega",       time: "~1h" },
    ],
    videoSrc: "/videos/piezas-tecnicas.mp4",
    renderCmd: "npm run render:piezas",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "personalizado",
    title: "Productos Personalizados",
    subtitle: "Tu imaginación hecha objeto físico",
    description:
      "Figuras, esculturas, accesorios y objetos únicos. Tomamos tu idea, la modelamos en 3D y la imprimimos con los colores y acabados que necesitas. Sin límites creativos.",
    accentColor: "#9d5cff",
    borderColor: "rgba(123,47,255,0.25)",
    steps: [
      { step: "01", label: "Tu Idea es el Límite",     time: "Consulta gratis" },
      { step: "02", label: "Modelado 3D Creativo",     time: "~3h" },
      { step: "03", label: "Impresión con Colores",    time: "~5h" },
      { step: "04", label: "Acabado & Presentación",   time: "~2h" },
    ],
    videoSrc: "/videos/producto-personalizado.mp4",
    renderCmd: "npm run render:personalizado",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
];

export default function VideoShowcase() {
  const [active, setActive] = useState(0);
  const video = VIDEOS[active];

  return (
    <section
      id="como-trabajamos"
      className="py-24 relative"
      style={{ background: "#080818" }}
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest text-[#9d5cff] mb-4 uppercase"
            style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)" }}
          >
            // cómo trabajamos
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#e8eaf6] mb-4"
            style={{ fontFamily: "var(--font-orbitron,'Orbitron',sans-serif)" }}
          >
            El Proceso en Video
          </h2>
          <p className="text-[#546e7a] text-sm sm:text-base max-w-xl mx-auto">
            Cada servicio tiene su propio flujo de trabajo. Explora paso a paso cómo fabricamos
            cada tipo de proyecto.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* Tab selector */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          {VIDEOS.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setActive(i)}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-semibold transition-all duration-200"
              style={{
                borderColor: active === i ? v.accentColor + "60" : "#1a1a3e",
                background:  active === i ? v.accentColor + "10" : "#0f0f2a",
                color:       active === i ? v.accentColor : "#546e7a",
                boxShadow:   active === i ? `0 0 20px ${v.accentColor}15` : "none",
              }}
            >
              <span style={{ color: active === i ? v.accentColor : "#546e7a" }}>
                {v.icon}
              </span>
              {v.title}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Video player */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: video.borderColor, background: "#0a0a1e" }}
          >
            {/* Video header */}
            <div
              className="flex items-center gap-3 px-5 py-3 border-b"
              style={{ borderColor: "#1a1a3e", background: "#0d0d25" }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span
                className="text-xs text-[#546e7a] ml-2"
                style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)" }}
              >
                {video.id}.mp4 — 3D Kame House
              </span>
            </div>

            {/* Video area */}
            <div className="relative" style={{ aspectRatio: "16/9" }}>
              {/* Intentamos cargar el video renderizado; si no existe, mostramos el placeholder animado */}
              <video
                key={video.id}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                style={{ display: "block" }}
                onError={(e) => {
                  // Si el video no existe todavía, oculta el elemento
                  (e.target as HTMLVideoElement).style.display = "none";
                  const placeholder = (e.target as HTMLVideoElement).nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = "flex";
                }}
              >
                <source src={video.videoSrc} type="video/mp4" />
              </video>

              {/* Placeholder animado (se muestra cuando el video MP4 no está disponible) */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: "#050510", display: "flex" }}
              >
                {/* Animated process visualization */}
                <div className="flex flex-col items-center gap-6 px-8">
                  {/* Service icon large */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center animate-pulse-glow"
                    style={{
                      background: `${video.accentColor}12`,
                      border: `2px solid ${video.accentColor}40`,
                      color: video.accentColor,
                    }}
                  >
                    <span style={{ transform: "scale(2.5)" }}>{video.icon}</span>
                  </div>

                  <div className="text-center">
                    <h3
                      className="text-xl font-black text-[#e8eaf6] mb-1"
                      style={{ fontFamily: "var(--font-orbitron,'Orbitron',sans-serif)" }}
                    >
                      {video.title}
                    </h3>
                    <p className="text-sm text-[#546e7a]">{video.subtitle}</p>
                  </div>

                  {/* Process steps mini visualization */}
                  <div className="flex items-center gap-2 w-full">
                    {video.steps.map((s, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{
                            background: `${video.accentColor}15`,
                            border: `1px solid ${video.accentColor}40`,
                            color: video.accentColor,
                            fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
                            animation: `printer-pulse ${1 + i * 0.3}s ease-in-out infinite`,
                          }}
                        >
                          {s.step}
                        </div>
                        {i < video.steps.length - 1 && (
                          <div
                            className="absolute"
                            style={{
                              width: 20,
                              height: 1,
                              background: `${video.accentColor}30`,
                              transform: `translateX(24px)`,
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Remotion badge */}
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1a1a3e] mt-2"
                    style={{ background: "#0a0a1e" }}
                  >
                    <svg className="w-4 h-4 text-[#546e7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.328l5.603 3.113z" />
                    </svg>
                    <span
                      className="text-xs text-[#546e7a]"
                      style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)" }}
                    >
                      Generado con Remotion · {video.renderCmd}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Process details */}
          <div className="space-y-5">
            {/* Description */}
            <div
              className="rounded-xl border p-6"
              style={{ background: "#0f0f2a", borderColor: video.borderColor }}
            >
              <h3
                className="text-lg font-bold text-[#e8eaf6] mb-3"
                style={{ fontFamily: "var(--font-orbitron,'Orbitron',sans-serif)" }}
              >
                {video.title}
              </h3>
              <p className="text-sm text-[#90a4ae] leading-relaxed">{video.description}</p>
            </div>

            {/* Steps timeline */}
            <div className="space-y-3">
              {video.steps.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1a1a3e] transition-all duration-200 hover:border-opacity-50"
                  style={{ background: "#0f0f2a" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = video.accentColor + "40";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#1a1a3e";
                  }}
                >
                  {/* Step number */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold"
                    style={{
                      background: `${video.accentColor}10`,
                      border: `1px solid ${video.accentColor}30`,
                      color: video.accentColor,
                      fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
                    }}
                  >
                    {s.step}
                  </div>
                  {/* Connector */}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#e8eaf6]">{s.label}</p>
                  </div>
                  {/* Time badge */}
                  <span
                    className="text-xs px-2.5 py-1 rounded border text-[#546e7a] shrink-0"
                    style={{
                      borderColor: "#1a1a3e",
                      fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
                    }}
                  >
                    {s.time}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${video.accentColor}, ${video.accentColor}99)`,
                color: "#050510",
                boxShadow: `0 0 0 transparent`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 30px ${video.accentColor}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Cotizar {video.title}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Remotion info note */}
        <div className="mt-10 text-center">
          <p
            className="text-xs text-[#546e7a]"
            style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)" }}
          >
            Videos generados programáticamente con{" "}
            <a
              href="https://remotion.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9d5cff] hover:text-[#00e5ff] transition-colors"
            >
              Remotion
            </a>
            {" "}· Para renderizar:{" "}
            <span className="text-[#00e5ff]">cd video && npm install && npm run render:all</span>
          </p>
        </div>
      </div>
    </section>
  );
}
