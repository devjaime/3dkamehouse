"use client";

/**
 * Printer3D - Animación SVG CSS-only de una impresora 3D FDM funcionando.
 * Muestra: cama de impresión, cabezal moviéndose, filamento extruido capa por capa,
 * bobina de filamento, y datos en tiempo real del proceso.
 */
export default function Printer3D() {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Status badge */}
      <div className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5">
        <span className="w-2 h-2 rounded-full bg-[#00e676] printer-pulse" />
        <span
          className="text-xs text-[#00e5ff] font-semibold tracking-widest"
          style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)" }}
        >
          IMPRIMIENDO EN VIVO
        </span>
      </div>

      {/* SVG printer */}
      <svg
        viewBox="0 0 340 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-sm"
        aria-label="Animación de impresora 3D en funcionamiento"
      >
        {/* ── DEFINITIONS ── */}
        <defs>
          {/* Filament material gradient */}
          <linearGradient id="filamentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7b2fff" stopOpacity="0.9" />
          </linearGradient>

          {/* Nozzle heat glow */}
          <radialGradient id="heatGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6d00" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#ff6d00" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ff6d00" stopOpacity="0" />
          </radialGradient>

          {/* Bed glow */}
          <linearGradient id="bedGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff8f00" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ff6d00" stopOpacity="0" />
          </linearGradient>

          {/* Spool gradient */}
          <radialGradient id="spoolGrad" cx="50%" cy="50%" r="50%">
            <stop offset="20%" stopColor="#0f0f2a" />
            <stop offset="60%" stopColor="#1a1a3e" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.3" />
          </radialGradient>

          {/* Clip for layer build-up */}
          <clipPath id="printAreaClip">
            <rect x="90" y="130" width="160" height="90" />
          </clipPath>
        </defs>

        {/* ── FRAME / CHASSIS ── */}
        {/* Left vertical rail */}
        <rect x="60" y="20" width="6" height="220" rx="3" fill="#1a1a3e" stroke="#00e5ff" strokeWidth="0.5" strokeOpacity="0.4" />
        {/* Right vertical rail */}
        <rect x="274" y="20" width="6" height="220" rx="3" fill="#1a1a3e" stroke="#00e5ff" strokeWidth="0.5" strokeOpacity="0.4" />
        {/* Top horizontal rail */}
        <rect x="56" y="18" width="228" height="8" rx="4" fill="#0f0f2a" stroke="#00e5ff" strokeWidth="0.8" strokeOpacity="0.5" />
        {/* Bottom frame base */}
        <rect x="50" y="235" width="240" height="12" rx="6" fill="#0a0a1e" stroke="#1a1a3e" strokeWidth="1" />
        {/* Corner accents */}
        <rect x="56" y="18" width="14" height="14" rx="2" fill="#00e5ff" fillOpacity="0.15" stroke="#00e5ff" strokeWidth="0.8" />
        <rect x="270" y="18" width="14" height="14" rx="2" fill="#00e5ff" fillOpacity="0.15" stroke="#00e5ff" strokeWidth="0.8" />

        {/* ── PRINT BED ── */}
        {/* Bed glow (heated bed) */}
        <rect x="82" y="218" width="176" height="20" rx="2" fill="url(#bedGlow)" />
        {/* Bed surface */}
        <rect x="82" y="215" width="176" height="8" rx="2" fill="#0d0d28" stroke="#ff6d00" strokeWidth="0.8" strokeOpacity="0.6" />
        {/* Bed grid lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={`bh${i}`}
            x1="82" y1={217 + i * 1.2} x2="258" y2={217 + i * 1.2}
            stroke="#ff8f00" strokeWidth="0.3" strokeOpacity="0.25"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line
            key={`bv${i}`}
            x1={82 + i * 25} y1="215" x2={82 + i * 25} y2="223"
            stroke="#ff8f00" strokeWidth="0.3" strokeOpacity="0.25"
          />
        ))}
        {/* Bed supports */}
        <rect x="100" y="223" width="4" height="12" rx="2" fill="#1a1a3e" />
        <rect x="236" y="223" width="4" height="12" rx="2" fill="#1a1a3e" />

        {/* ── PRINTED OBJECT (layers building up) ── */}
        {/* Layer group - clipped to print area */}
        <g clipPath="url(#printAreaClip)">
          {/* Base layers (static - already printed) */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <rect
              key={`layer${i}`}
              x="110" y={209 - i * 7} width="120" height="5"
              rx="1"
              fill={i % 2 === 0 ? "url(#filamentGrad)" : "#7b2fff"}
              fillOpacity={0.3 + i * 0.04}
              stroke="#00e5ff"
              strokeWidth="0.3"
              strokeOpacity="0.4"
            />
          ))}
          {/* Top active layer (being printed - animates width) */}
          <rect
            x="110" y="146" width="120" height="5"
            rx="1"
            fill="url(#filamentGrad)"
            fillOpacity="0.7"
            stroke="#00e5ff"
            strokeWidth="0.5"
            className="printer-layer-active"
          />
        </g>

        {/* ── GANTRY (horizontal rod that moves up/down) ── */}
        <rect
          x="62" y="95" width="216" height="5"
          rx="2.5"
          fill="#0d0d28"
          stroke="#00e5ff"
          strokeWidth="0.8"
          strokeOpacity="0.6"
          className="printer-gantry"
        />

        {/* ── PRINTHEAD CARRIAGE ── */}
        {/* Carriage block — moves left/right */}
        <g className="printer-carriage">
          {/* Main carriage body */}
          <rect x="148" y="88" width="44" height="18" rx="4" fill="#0f0f2a" stroke="#00e5ff" strokeWidth="1" />
          {/* Carriage details */}
          <rect x="152" y="92" width="8" height="6" rx="1" fill="#1a1a3e" stroke="#00e5ff" strokeWidth="0.4" strokeOpacity="0.5" />
          <rect x="162" y="92" width="8" height="6" rx="1" fill="#1a1a3e" stroke="#00e5ff" strokeWidth="0.4" strokeOpacity="0.5" />
          <rect x="172" y="92" width="8" height="6" rx="1" fill="#1a1a3e" stroke="#00e5ff" strokeWidth="0.4" strokeOpacity="0.5" />
          {/* Hotend tube */}
          <rect x="163" y="106" width="14" height="22" rx="2" fill="#0a0a1e" stroke="#546e7a" strokeWidth="0.8" />
          {/* Heater block */}
          <rect x="160" y="122" width="20" height="12" rx="2" fill="#ff6d00" fillOpacity="0.2" stroke="#ff6d00" strokeWidth="1" />
          {/* Nozzle tip */}
          <path d="M167 134 L170 142 L173 134Z" fill="#ff8f00" fillOpacity="0.8" />
          {/* Heat glow */}
          <circle cx="170" cy="140" r="10" fill="url(#heatGlow)" className="printer-heat-pulse" />
          {/* Fan on side */}
          <circle cx="156" cy="115" r="6" fill="#0a0a1e" stroke="#1a1a3e" strokeWidth="0.8" />
          <path d="M156 109 L158 112 M162 115 L159 115 M156 121 L154 118 M150 115 L153 115"
            stroke="#546e7a" strokeWidth="0.8" strokeLinecap="round"
            className="printer-fan-spin"
          />
        </g>

        {/* ── FILAMENT STRAND (from spool to printhead) ── */}
        {/* Curved path from spool to carriage */}
        <path
          d="M295 95 Q 270 75 240 92 Q 210 108 195 105"
          stroke="url(#filamentGrad)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeOpacity="0.7"
          strokeDasharray="4 3"
          className="printer-filament-flow"
        />

        {/* ── EXTRUDED FILAMENT (nozzle to print) ── */}
        <line
          x1="170" y1="142" x2="170" y2="151"
          stroke="url(#filamentGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="printer-extrude"
        />

        {/* ── FILAMENT SPOOL ── */}
        <g className="printer-spool-rotate">
          {/* Spool outer ring */}
          <circle cx="300" cy="100" r="38" fill="url(#spoolGrad)" stroke="#00e5ff" strokeWidth="1" strokeOpacity="0.4" />
          {/* Spool inner hub */}
          <circle cx="300" cy="100" r="20" fill="#080818" stroke="#1a1a3e" strokeWidth="1" />
          <circle cx="300" cy="100" r="10" fill="#050510" stroke="#00e5ff" strokeWidth="0.5" strokeOpacity="0.5" />
          {/* Filament wound on spool */}
          {[0, 1, 2, 3].map((ring) => (
            <circle
              key={ring}
              cx="300" cy="100" r={21 + ring * 4}
              fill="none"
              stroke="url(#filamentGrad)"
              strokeWidth="2.5"
              strokeOpacity={0.25 - ring * 0.04}
              strokeDasharray={`${6 + ring * 2} ${3 + ring}`}
            />
          ))}
          {/* Spool spoke accents */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1={300 + 11 * Math.cos((angle * Math.PI) / 180)}
              y1={100 + 11 * Math.sin((angle * Math.PI) / 180)}
              x2={300 + 19 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 19 * Math.sin((angle * Math.PI) / 180)}
              stroke="#00e5ff"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
          ))}
          {/* Center bolt */}
          <circle cx="300" cy="100" r="4" fill="#00e5ff" fillOpacity="0.3" />
          <circle cx="300" cy="100" r="2" fill="#00e5ff" fillOpacity="0.7" />
        </g>
        {/* Spool holder axle */}
        <rect x="297" y="58" width="6" height="10" rx="3" fill="#1a1a3e" stroke="#546e7a" strokeWidth="0.5" />
        <line x1="300" y1="58" x2="300" y2="20" stroke="#1a1a3e" strokeWidth="2" />

        {/* ── LCD/DISPLAY PANEL ── */}
        <rect x="55" y="150" width="36" height="54" rx="4" fill="#080818" stroke="#1a1a3e" strokeWidth="1" />
        <rect x="58" y="153" width="30" height="24" rx="2" fill="#050510" stroke="#00e5ff" strokeWidth="0.5" strokeOpacity="0.4" />
        {/* Display lines */}
        <text x="73" y="162" textAnchor="middle" fill="#00e5ff" fontSize="4" fontFamily="monospace" opacity="0.8">215°C</text>
        <text x="73" y="169" textAnchor="middle" fill="#ff8f00" fontSize="4" fontFamily="monospace" opacity="0.8">60°C</text>
        <text x="73" y="175" textAnchor="middle" fill="#00e676" fontSize="3.5" fontFamily="monospace" opacity="0.8">37%</text>
        {/* Display progress bar */}
        <rect x="60" y="178" width="26" height="3" rx="1.5" fill="#1a1a3e" />
        <rect x="60" y="178" width="10" height="3" rx="1.5" fill="#00e5ff" className="printer-progress-bar" />
        {/* Encoder knob */}
        <circle cx="73" cy="194" r="6" fill="#0f0f2a" stroke="#546e7a" strokeWidth="0.8" />
        <line x1="73" y1="188" x2="73" y2="190" stroke="#90a4ae" strokeWidth="1" strokeLinecap="round" />

        {/* ── MOTION BELT (horizontal) ── */}
        <path
          d="M65 97 L275 97"
          stroke="#546e7a"
          strokeWidth="0.8"
          strokeDasharray="3 2"
          strokeOpacity="0.4"
        />

        {/* ── Z-AXIS LEAD SCREW (right side detail) ── */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <ellipse
            key={i}
            cx="275" cy={30 + i * 20} rx="3" ry="1.5"
            fill="none"
            stroke="#546e7a"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
        ))}
      </svg>

      {/* ── LIVE DATA READOUT ── */}
      <div
        className="mt-3 grid grid-cols-3 gap-2 w-full max-w-sm"
        style={{ fontFamily: "var(--font-mono,'JetBrains Mono',monospace)" }}
      >
        {[
          { label: "NOZZLE", value: "215°C", color: "#ff6d00" },
          { label: "CAMA",   value: "60°C",  color: "#ff8f00" },
          { label: "CAPA",   value: "0.2mm", color: "#00e5ff" },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            className="flex flex-col items-center py-2 px-3 rounded-lg border border-[#1a1a3e]"
            style={{ background: "#0a0a1e" }}
          >
            <span className="text-[10px] text-[#546e7a] uppercase tracking-widest">{label}</span>
            <span className="text-sm font-bold mt-0.5" style={{ color }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
