"use client";

import { useState } from "react";
import { COMPANY, OWNER } from "@/data/content";

type FormData = {
  nombre: string;
  email: string;
  tipo: string;
  mensaje: string;
};

const initialForm: FormData = { nombre: "", email: "", tipo: "", mensaje: "" };

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[#0a0a1e] border border-[#1a1a3e] text-[#e8eaf6] text-sm placeholder-[#546e7a] focus:outline-none focus:border-[#00e5ff]/50 focus:ring-1 focus:ring-[#00e5ff]/20 transition-all duration-200";

  return (
    <section
      id="contacto"
      className="py-24 relative"
      style={{ background: "#050510" }}
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-widest text-[#00e5ff] mb-4 uppercase"
            style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
          >
            // contacto
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#e8eaf6] mb-4"
            style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
          >
            Hablemos de tu Proyecto
          </h2>
          <p className="text-[#546e7a] text-sm sm:text-base max-w-xl mx-auto">
            Cuéntanos tu idea y te respondemos en menos de 24 horas.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div className="space-y-6">
            <div
              className="rounded-2xl border border-[#1a1a3e] p-8"
              style={{ background: "#0f0f2a" }}
            >
              <h3
                className="text-lg font-bold text-[#e8eaf6] mb-6"
                style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
              >
                Información de Contacto
              </h3>

              <div className="space-y-5">
                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1a1a3e] hover:border-[#00e5ff]/30 hover:bg-[#00e5ff]/3 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#546e7a] mb-0.5 uppercase tracking-wider font-medium">Email</p>
                    <p className="text-sm text-[#e8eaf6] group-hover:text-[#00e5ff] transition-colors">
                      {COMPANY.email}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${OWNER.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1a1a3e] hover:border-[#00e676]/30 hover:bg-[#00e676]/3 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00e676]/10 border border-[#00e676]/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#00e676]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#546e7a] mb-0.5 uppercase tracking-wider font-medium">WhatsApp</p>
                    <p className="text-sm text-[#e8eaf6] group-hover:text-[#00e676] transition-colors">
                      +56 9 4928 8019
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-[#1a1a3e]">
                  <div className="w-10 h-10 rounded-xl bg-[#7b2fff]/10 border border-[#7b2fff]/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#9d5cff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#546e7a] mb-0.5 uppercase tracking-wider font-medium">Ubicación</p>
                    <p className="text-sm text-[#e8eaf6]">{COMPANY.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response badge */}
            <div
              className="rounded-xl border border-[#00e676]/20 p-5 flex items-center gap-4"
              style={{ background: "rgba(0,230,118,0.04)" }}
            >
              <span className="w-3 h-3 rounded-full bg-[#00e676] animate-pulse shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#e8eaf6]">Respuesta en menos de 24h</p>
                <p className="text-xs text-[#546e7a] mt-0.5">Lunes a viernes, 9:00–18:00 hrs</p>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div
            className="rounded-2xl border border-[#1a1a3e] p-8"
            style={{ background: "#0f0f2a" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 animate-pulse-glow"
                  style={{ background: "rgba(0,230,118,0.1)", border: "2px solid rgba(0,230,118,0.3)" }}
                >
                  <svg className="w-10 h-10 text-[#00e676]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3
                  className="text-xl font-bold text-[#e8eaf6] mb-2"
                  style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                >
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-[#90a4ae] text-sm mb-6">
                  Gracias, {form.nombre}. Te responderemos pronto a <strong className="text-[#00e5ff]">{form.email}</strong>
                </p>
                <button
                  onClick={() => { setSent(false); setForm(initialForm); }}
                  className="px-5 py-2.5 rounded-lg border border-[#1a1a3e] text-[#90a4ae] text-sm hover:border-[#00e5ff]/30 hover:text-[#00e5ff] transition-all"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="text-lg font-bold text-[#e8eaf6] mb-6"
                  style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
                >
                  Cuéntanos tu Proyecto
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#546e7a] font-medium mb-1.5 uppercase tracking-wider">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#546e7a] font-medium mb-1.5 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#546e7a] font-medium mb-1.5 uppercase tracking-wider">
                      Tipo de Proyecto
                    </label>
                    <select
                      name="tipo"
                      value={form.tipo}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="prototipado">Prototipado Rápido</option>
                      <option value="piezas">Piezas Técnicas</option>
                      <option value="personalizado">Producto Personalizado</option>
                      <option value="consultoria">Consultoría 3D</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-[#546e7a] font-medium mb-1.5 uppercase tracking-wider">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Cuéntanos qué necesitas, dimensiones aproximadas, cantidad, material preferido..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-[#050510] text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#00e5ff]/25 active:scale-100"
                    style={{ background: "linear-gradient(135deg, #00e5ff, #00b4cc)" }}
                  >
                    Enviar Mensaje
                    <span className="ml-2">→</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
