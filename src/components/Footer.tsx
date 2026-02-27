import { COMPANY, OWNER, SERVICES, NAV_LINKS } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#1a1a3e] pt-16 pb-8"
      style={{ background: "#080818" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00e5ff, #7b2fff)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M12 2L12 12M22 7L12 12M2 7L12 12" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
                </svg>
              </div>
              <span
                className="text-base font-black text-[#e8eaf6] tracking-wider"
                style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
              >
                3D <span className="text-[#00e5ff]">Kame</span> House
              </span>
            </div>
            <p className="text-sm text-[#546e7a] leading-relaxed mb-4">
              {COMPANY.shortDescription}
            </p>
            <p
              className="text-xs text-[#546e7a]"
              style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
            >
              RUT: {COMPANY.rut}
            </p>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-sm font-bold text-[#e8eaf6] mb-4 uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#servicios"
                    className="text-sm text-[#546e7a] hover:text-[#00e5ff] transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-sm font-bold text-[#e8eaf6] mb-4 uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#546e7a] hover:text-[#00e5ff] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-sm font-bold text-[#e8eaf6] mb-4 uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-sm text-[#546e7a] hover:text-[#00e5ff] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${OWNER.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#546e7a] hover:text-[#00e676] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#546e7a]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {COMPANY.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a3e]/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[#546e7a]"
            style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
          >
            &copy; {currentYear} {COMPANY.name} &middot; RUT {COMPANY.rut} &middot; Santiago, Chile
          </p>
          <p
            className="text-xs text-[#546e7a]"
            style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
          >
            Desarrollado por{" "}
            <span className="text-[#00e5ff] font-semibold">{OWNER.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
