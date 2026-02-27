import { OWNER, PROJECT_LEAD } from "@/data/content";

export default function Team() {
  return (
    <section
      id="equipo"
      className="py-24 relative"
      style={{ background: "#0a0a1e" }}
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest text-[#9d5cff] mb-4 uppercase"
            style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
          >
            // el equipo
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#e8eaf6] mb-4"
            style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
          >
            Las Personas Detrás
          </h2>
          <p className="text-[#546e7a] text-sm sm:text-base max-w-xl mx-auto">
            Profesionales comprometidos con la calidad y la innovación en cada proyecto de fabricación digital.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Jaime Hernández - Owner */}
          <div
            className="rounded-2xl border border-[#00e5ff]/20 p-8 card-glow-cyan relative overflow-hidden"
            style={{ background: "#0f0f2a" }}
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Avatar */}
            <div className="flex items-start gap-5 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-[#00e5ff]/30 animate-pulse-glow"
                style={{ background: "linear-gradient(135deg, #00e5ff22, #00b4cc22)" }}
              >
                <span
                  className="text-2xl font-black text-[#00e5ff]"
                  style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                >
                  {OWNER.initials}
                </span>
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-[#e8eaf6]"
                  style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                >
                  {OWNER.name}
                </h3>
                <span
                  className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/20"
                  style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                >
                  {OWNER.role}
                </span>
              </div>
            </div>

            <p className="text-[#90a4ae] text-sm leading-relaxed mb-6">{OWNER.bio}</p>

            {/* Specialties */}
            <div>
              <p className="text-xs text-[#546e7a] uppercase tracking-wider font-semibold mb-3">
                Especialidades
              </p>
              <ul className="space-y-2">
                {OWNER.specialties.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-[#90a4ae]">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#00e5ff" }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="mt-6 pt-6 border-t border-[#1a1a3e] flex gap-3">
              <a
                href={`mailto:${OWNER.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1a1a3e] hover:border-[#00e5ff]/30 text-[#546e7a] hover:text-[#00e5ff] text-xs font-medium transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email
              </a>
              <a
                href={`https://wa.me/${OWNER.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1a1a3e] hover:border-[#00e676]/30 text-[#546e7a] hover:text-[#00e676] text-xs font-medium transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Cristian Garcia - Project Lead */}
          <div
            className="rounded-2xl border border-[#ff6d00]/20 p-8 card-glow-orange relative overflow-hidden"
            style={{ background: "#0f0f2a" }}
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255,109,0,0.06) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Avatar */}
            <div className="flex items-start gap-5 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-[#ff6d00]/30 animate-pulse-glow-orange"
                style={{ background: "linear-gradient(135deg, #ff6d0022, #ff8f0022)" }}
              >
                <span
                  className="text-2xl font-black text-[#ff8f00]"
                  style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                >
                  {PROJECT_LEAD.initials}
                </span>
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-[#e8eaf6]"
                  style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                >
                  {PROJECT_LEAD.name}
                </h3>
                <span
                  className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#ff6d00]/10 text-[#ff8f00] border border-[#ff6d00]/20"
                  style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                >
                  {PROJECT_LEAD.role}
                </span>
              </div>
            </div>

            {/* Period badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-5 border border-[#ff6d00]/20"
              style={{ background: "rgba(255,109,0,0.06)" }}
            >
              <svg className="w-4 h-4 text-[#ff8f00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span
                className="text-xs font-semibold text-[#ff8f00]"
                style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
              >
                Oct 2020 — Abr 2022 · {PROJECT_LEAD.certPeriod.tipo}
              </span>
            </div>

            <p className="text-[#90a4ae] text-sm leading-relaxed mb-5">{PROJECT_LEAD.bio}</p>

            {/* Logros */}
            <div>
              <p className="text-xs text-[#546e7a] uppercase tracking-wider font-semibold mb-3">
                Logros Principales
              </p>
              <ul className="space-y-2">
                {PROJECT_LEAD.logros.map((logro) => (
                  <li key={logro} className="flex items-start gap-2 text-sm text-[#90a4ae]">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: "#ff6d00" }} />
                    {logro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {PROJECT_LEAD.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded text-xs font-medium border border-[#ff6d00]/20 text-[#ff8f00] bg-[#ff6d00]/5"
                  style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Link to certification */}
            <div className="mt-6 pt-6 border-t border-[#1a1a3e]">
              <a
                href="#certificacion"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff8f00] hover:text-[#ff6d00] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Ver Certificación Oficial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
