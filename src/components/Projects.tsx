"use client";

import { PROJECTS } from "@/data/content";

const colorConfig = {
  cyan: { text: "#00e5ff", border: "rgba(0,229,255,0.3)", top: "#00e5ff" },
  orange: { text: "#ff8f00", border: "rgba(255,109,0,0.3)", top: "#ff6d00" },
  violet: { text: "#9d5cff", border: "rgba(123,47,255,0.3)", top: "#7b2fff" },
};

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-24 relative"
      style={{ background: "#0a0a1e" }}
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest text-[#9d5cff] mb-4 uppercase"
            style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
          >
            // proyectos destacados
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#e8eaf6] mb-4"
            style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
          >
            Proyectos con Impacto
          </h2>
          <p className="text-[#546e7a] text-sm sm:text-base max-w-xl mx-auto">
            Iniciativas lideradas por el equipo que transformaron la operación y los resultados
            comerciales de 3D Kame House.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => {
            const cfg = colorConfig[project.color];
            return (
              <div
                key={project.id}
                className="rounded-2xl border border-[#1a1a3e] overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
                style={{
                  background: "#0f0f2a",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = cfg.border;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1a1a3e";
                }}
              >
                {/* Top color bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: `linear-gradient(90deg, ${cfg.top}, transparent)` }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Category + period */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded border"
                      style={{
                        color: cfg.text,
                        borderColor: cfg.border,
                        background: `${cfg.top}10`,
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="text-xs text-[#546e7a]"
                      style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                    >
                      {project.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-bold text-[#e8eaf6] mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#90a4ae] leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs bg-[#1a1a3e] text-[#546e7a] border border-[#1a1a3e]"
                        style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Lead */}
                  <div className="flex items-center gap-2 pt-4 border-t border-[#1a1a3e]">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: `${cfg.top}20`, color: cfg.text }}
                    >
                      C
                    </div>
                    <span className="text-xs text-[#546e7a]">
                      Liderado por{" "}
                      <a href="#certificacion" className="font-semibold" style={{ color: cfg.text }}>
                        {project.lead}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#546e7a]">
            Todos los proyectos fueron ejecutados durante el período 2020–2022 en 3D Kame House.
          </p>
        </div>
      </div>
    </section>
  );
}
