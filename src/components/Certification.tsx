import { PROJECT_LEAD, OWNER, COMPANY } from "@/data/content";

export default function Certification() {
  return (
    <section
      id="certificacion"
      className="py-24 relative"
      style={{ background: "#050510" }}
    >
      <div className="absolute inset-0 grid-pattern-dense opacity-20" />

      {/* Glow behind card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,109,0,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest text-[#ff8f00] mb-4 uppercase"
            style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
          >
            // certificación oficial
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#e8eaf6] mb-4"
            style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
          >
            Certificación de
            <span
              style={{
                background: "linear-gradient(135deg, #ff6d00, #ff8f00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}Participación
            </span>
          </h2>
          <p className="text-[#546e7a] text-sm sm:text-base max-w-xl mx-auto">
            Documento formal que acredita la participación y los logros de Cristian Garcia Salazar
            en el proyecto 3D Kame House.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* Certification Document Card */}
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl border border-[#ff6d00]/25 overflow-hidden relative"
            style={{
              background: "#0a0a20",
              boxShadow: "0 0 60px rgba(255,109,0,0.08), 0 0 120px rgba(255,109,0,0.04)",
            }}
          >
            {/* Watermark */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              aria-hidden="true"
            >
              <span
                className="text-[8rem] font-black text-[#ff6d00] opacity-[0.025] rotate-[-30deg] tracking-widest"
                style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
              >
                CERT
              </span>
            </div>

            {/* Header strip */}
            <div
              className="px-8 py-6 border-b border-[#ff6d00]/20 flex items-center justify-between"
              style={{ background: "linear-gradient(135deg, rgba(255,109,0,0.1), rgba(123,47,255,0.08))" }}
            >
              <div className="flex items-center gap-4">
                {/* Seal */}
                <div className="relative w-14 h-14 shrink-0">
                  <svg viewBox="0 0 56 56" className="w-full h-full">
                    <circle cx="28" cy="28" r="26" stroke="#ff6d00" strokeWidth="1.5" fill="none" opacity="0.6" />
                    <circle cx="28" cy="28" r="20" stroke="#ff8f00" strokeWidth="0.8" fill="none" opacity="0.4" strokeDasharray="3 4" />
                    <circle cx="28" cy="28" r="14" fill="rgba(255,109,0,0.1)" stroke="#ff6d00" strokeWidth="0.8" />
                    <text x="28" y="33" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ff8f00"
                      style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}>
                      KH
                    </text>
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-lg font-black text-[#e8eaf6] tracking-widest"
                    style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                  >
                    3D KAME HOUSE
                  </h3>
                  <p
                    className="text-xs text-[#546e7a] mt-0.5"
                    style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                  >
                    RUT: {COMPANY.rut} · Santiago, Chile
                  </p>
                </div>
              </div>

              {/* Verified badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e676]/30 bg-[#00e676]/5 shrink-0">
                <svg className="w-4 h-4 text-[#00e676]" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold text-[#00e676]">Verificado</span>
              </div>
            </div>

            {/* Document body */}
            <div className="px-8 py-8">
              {/* Opening statement */}
              <p className="text-[#90a4ae] text-sm leading-relaxed mb-6">
                Yo,{" "}
                <strong className="text-[#e8eaf6] font-semibold">{OWNER.name}</strong>, en
                carácter de{" "}
                <strong className="text-[#00e5ff] font-semibold">{OWNER.role}</strong> de la firma{" "}
                <strong className="text-[#e8eaf6] font-semibold">Impresiones {COMPANY.name}</strong>,
                RUT {COMPANY.rut}, por la presente doy fe que:
              </p>

              {/* Certified person */}
              <div
                className="rounded-xl p-6 mb-8 border border-[#ff6d00]/20 relative"
                style={{ background: "rgba(255,109,0,0.05)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#ff6d00]/30"
                    style={{ background: "rgba(255,109,0,0.1)" }}
                  >
                    <span
                      className="text-lg font-black text-[#ff8f00]"
                      style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                    >
                      {PROJECT_LEAD.initials}
                    </span>
                  </div>
                  <div>
                    <h4
                      className="text-xl font-black text-[#e8eaf6]"
                      style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                    >
                      {PROJECT_LEAD.name}
                    </h4>
                    <p className="text-sm text-[#ff8f00] font-semibold">{PROJECT_LEAD.role}</p>
                  </div>
                </div>

                <p className="text-[#90a4ae] text-sm leading-relaxed">
                  Se ha desempeñado{" "}
                  <strong className="text-[#00e5ff]">satisfactoriamente</strong> como{" "}
                  <strong className="text-[#e8eaf6]">{PROJECT_LEAD.role}</strong> en el proyecto
                  que se detalla a continuación.
                </p>
              </div>

              {/* Data table */}
              <div className="rounded-xl overflow-hidden border border-[#1a1a3e] mb-8">
                {[
                  {
                    label: "Tipo de Contrato",
                    value: PROJECT_LEAD.certPeriod.tipo,
                    color: "#00e5ff",
                  },
                  {
                    label: "Desde",
                    value: PROJECT_LEAD.certPeriod.desde,
                    color: "#9d5cff",
                  },
                  {
                    label: "Hasta",
                    value: PROJECT_LEAD.certPeriod.hasta,
                    color: "#9d5cff",
                  },
                  {
                    label: "Empresa",
                    value: `${COMPANY.name} — RUT ${COMPANY.rut}`,
                    color: "#ff8f00",
                  },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-center ${i !== 0 ? "border-t border-[#1a1a3e]" : ""}`}
                  >
                    <div
                      className="w-40 sm:w-48 px-5 py-4 text-sm font-bold shrink-0"
                      style={{ background: "#0d0d28", color: "#e8eaf6" }}
                    >
                      {row.label}
                    </div>
                    <div
                      className="px-5 py-4 text-sm flex-1"
                      style={{ color: row.color }}
                    >
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Objective */}
              <div className="mb-8">
                <h5 className="text-xs font-bold uppercase tracking-widest text-[#546e7a] mb-3">
                  Objetivo de la Contratación
                </h5>
                <p className="text-[#90a4ae] text-sm leading-relaxed border-l-2 border-[#7b2fff]/40 pl-4">
                  {PROJECT_LEAD.objetivo}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h5 className="text-xs font-bold uppercase tracking-widest text-[#546e7a] mb-4">
                  Principales Resultados
                </h5>
                <ul className="space-y-3">
                  {PROJECT_LEAD.logros.map((logro, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "rgba(255,109,0,0.12)", border: "1px solid rgba(255,109,0,0.25)" }}
                      >
                        <svg className="w-3.5 h-3.5 text-[#ff8f00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-sm text-[#90a4ae] leading-relaxed">{logro}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="section-divider mb-8" />

              {/* Signature */}
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div>
                  <div
                    className="text-lg font-black text-[#e8eaf6] mb-1"
                    style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                  >
                    {OWNER.name}
                  </div>
                  <p className="text-sm text-[#00e5ff] font-semibold">{OWNER.role}</p>
                  <p
                    className="text-xs text-[#546e7a] mt-1"
                    style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                  >
                    {COMPANY.name} · RUT {COMPANY.rut}
                  </p>
                </div>

                {/* Document metadata */}
                <div className="text-right">
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1a1a3e] text-xs text-[#546e7a]"
                    style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    DOC-3DKH-2022-CGS
                  </span>
                </div>
              </div>
            </div>

            {/* Footer strip */}
            <div
              className="px-8 py-4 border-t border-[#1a1a3e] flex items-center justify-between"
              style={{ background: "rgba(8,8,30,0.8)" }}
            >
              <p
                className="text-xs text-[#546e7a]"
                style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
              >
                Período: {PROJECT_LEAD.certPeriod.desde} → {PROJECT_LEAD.certPeriod.hasta}
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse" />
                <span
                  className="text-xs text-[#00e676] font-semibold"
                  style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                >
                  CERTIFICADO VÁLIDO
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#ff6d00]/30 text-[#ff8f00] text-sm font-semibold hover:bg-[#ff6d00]/5 hover:border-[#ff6d00]/60 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0l-4-4m4 4l-4 4" />
              </svg>
              Ver Proyectos Liderados
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#00e5ff]/20 text-[#00e5ff] text-sm font-semibold hover:bg-[#00e5ff]/5 hover:border-[#00e5ff]/40 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Contactar a Jaime Hernández
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
