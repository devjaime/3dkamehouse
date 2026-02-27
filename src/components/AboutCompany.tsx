"use client";

import { COMPANY } from "@/data/content";

const metrics = [
  {
    label: "Precisión",
    value: "±0.1mm",
    description: "Tolerancia en cada pieza producida",
    color: "#00e5ff",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Calidad",
    value: "ISO",
    description: "Estándares de calidad en cada proyecto",
    color: "#7b2fff",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    label: "Innovación",
    value: "3D+",
    description: "Tecnologías de fabricación aditiva",
    color: "#ff6d00",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

export default function AboutCompany() {
  return (
    <section
      id="nosotros"
      className="py-24 relative"
      style={{ background: "#0a0a1e" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest text-[#00e5ff] mb-4 uppercase"
            style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
          >
            // quiénes somos
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#e8eaf6] mb-4"
            style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
          >
            3D Kame House
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Company info */}
          <div
            className="rounded-2xl border border-[#00e5ff]/20 p-8 card-glow-cyan"
            style={{ background: "#0f0f2a" }}
          >
            {/* Badge strip */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold border border-[#00e5ff]/30 text-[#00e5ff] bg-[#00e5ff]/5"
                style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
              >
                RUT: {COMPANY.rut}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold border border-[#00e676]/30 text-[#00e676] bg-[#00e676]/5"
                style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
              >
                Desde {COMPANY.founded}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold border border-[#7b2fff]/30 text-[#9d5cff] bg-[#7b2fff]/5"
                style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
              >
                Santiago, Chile
              </span>
            </div>

            <h3
              className="text-xl font-bold text-[#e8eaf6] mb-4"
              style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
            >
              {COMPANY.tagline}
            </h3>

            <p className="text-[#90a4ae] leading-relaxed mb-6 text-sm sm:text-base">
              {COMPANY.description}
            </p>

            <p className="text-[#90a4ae] leading-relaxed text-sm sm:text-base">
              {COMPANY.shortDescription}
            </p>

            {/* Divider */}
            <div className="my-6 h-px bg-[#1a1a3e]" />

            {/* Tech badges */}
            <div>
              <p className="text-xs text-[#546e7a] uppercase tracking-wider mb-3 font-semibold">
                Tecnologías
              </p>
              <div className="flex flex-wrap gap-2">
                {["FDM", "SLA", "SLS", "PLA", "ABS", "PETG", "TPU", "Resina"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-medium bg-[#1a1a3e] text-[#90a4ae] border border-[#1a1a3e] hover:border-[#00e5ff]/30 hover:text-[#00e5ff] transition-colors cursor-default"
                    style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Metrics grid */}
          <div className="space-y-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-[#1a1a3e] p-6 flex items-center gap-5 hover:border-opacity-50 transition-all duration-300 group"
                style={{
                  background: "#0f0f2a",
                  borderColor: "#1a1a3e",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = metric.color + "40";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1a1a3e";
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${metric.color}15`,
                    color: metric.color,
                    border: `1px solid ${metric.color}30`,
                  }}
                >
                  {metric.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span
                      className="text-2xl font-black"
                      style={{
                        fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)",
                        color: metric.color,
                      }}
                    >
                      {metric.value}
                    </span>
                    <span className="text-sm font-semibold text-[#e8eaf6]">{metric.label}</span>
                  </div>
                  <p className="text-xs text-[#546e7a]">{metric.description}</p>
                </div>
              </div>
            ))}

            {/* Bottom card: mission statement */}
            <div
              className="rounded-xl border border-[#ff6d00]/20 p-5"
              style={{ background: "linear-gradient(135deg, #0f0f2a, #150a00)" }}
            >
              <p className="text-sm text-[#90a4ae] italic leading-relaxed">
                &ldquo;Nuestro compromiso es convertir cada proyecto en una experiencia de
                fabricación digital confiable, precisa y a la medida de tus necesidades.&rdquo;
              </p>
              <p className="mt-2 text-xs text-[#ff8f00] font-semibold">— 3D Kame House</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
