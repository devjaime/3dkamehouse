"use client";

import { useState, useEffect } from "react";
import { STATS, TERMINAL_LINES } from "@/data/content";
import Printer3D from "@/components/Printer3D";

const colorMap: Record<string, string> = {
  cyan: "#00e5ff",
  violet: "#9d5cff",
  orange: "#ff8f00",
  green: "#00e676",
};

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= TERMINAL_LINES.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(135deg, #050510 0%, #080820 50%, #050510 100%)" }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Scan line effect */}
      <div
        className="absolute left-0 right-0 h-px animate-scan-line pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.4), transparent)" }}
      />

      {/* Floating gradient orbs */}
      <div
        className="absolute top-20 left-[10%] w-72 h-72 rounded-full animate-float pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full animate-float-delayed pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,47,255,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,109,0,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* 3D Printer animated illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] hidden lg:flex flex-col items-center pointer-events-none pr-4">
        <Printer3D />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 text-[#00e5ff] text-xs font-semibold tracking-widest"
              style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>
              <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse" />
              IMPRESIÓN 3D ACTIVA
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
          >
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-black text-[#e8eaf6] leading-tight">
              Fabricamos el
            </span>
            <span
              className="block text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
              style={{
                background: "linear-gradient(135deg, #00e5ff 0%, #7b2fff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Futuro
            </span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-light text-[#90a4ae] mt-2 tracking-wider">
              Capa por Capa
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-[#90a4ae] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Empresa chilena especializada en impresión 3D de alta precisión. Transformamos tus ideas
            digitales en objetos físicos reales con tecnología de fabricación aditiva de última generación.
          </p>

          {/* Terminal */}
          <div
            className={`mb-10 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div
              className="rounded-xl border border-[#1a1a3e] overflow-hidden"
              style={{ background: "rgba(8, 8, 30, 0.8)", backdropFilter: "blur(10px)" }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a3e]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span
                  className="ml-2 text-xs text-[#546e7a]"
                  style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                >
                  3dkamehouse — print_manager v2.4.1
                </span>
              </div>
              {/* Terminal body */}
              <div className="p-4 space-y-2 min-h-[140px]">
                {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                  <div
                    key={i}
                    className="flex gap-2 text-xs sm:text-sm animate-fade-in"
                    style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                  >
                    <span className="text-[#546e7a] shrink-0">$</span>
                    <span style={{ color: colorMap[line.color] ?? "#00e5ff" }} className="shrink-0 font-semibold">
                      {line.prefix}
                    </span>
                    <span className="text-[#90a4ae]">{line.text}</span>
                  </div>
                ))}
                {visibleLines < TERMINAL_LINES.length && (
                  <div
                    className="flex gap-2 text-xs sm:text-sm"
                    style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}
                  >
                    <span className="text-[#546e7a]">$</span>
                    <span className="w-2 h-4 bg-[#00e5ff] animate-blink-caret inline-block" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#050510] text-base transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#00e5ff]/30"
              style={{ background: "linear-gradient(135deg, #00e5ff, #00b4cc)" }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0l-4-4m4 4l-4 4" />
              </svg>
              Ver Proyectos
            </a>
            <a
              href="#equipo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#00e5ff] text-base border border-[#00e5ff]/30 hover:border-[#00e5ff]/60 hover:bg-[#00e5ff]/5 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Conocer el Equipo
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-[#1a1a3e] bg-[#0a0a1e]/60 text-center"
              >
                <div
                  className="text-2xl sm:text-3xl font-black"
                  style={{
                    fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)",
                    color: i % 2 === 0 ? "#00e5ff" : "#7b2fff",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-[#546e7a] mt-1 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #050510)" }}
      />
    </section>
  );
}
