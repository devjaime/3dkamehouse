"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050510]/95 backdrop-blur-md border-b border-[#00e5ff]/10 shadow-lg shadow-[#00e5ff]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00e5ff] to-[#7b2fff] flex items-center justify-center animate-pulse-glow transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path
                  d="M12 2L22 7V17L12 22L2 17V7L12 2Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2L12 12M22 7L12 12M2 7L12 12"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                />
              </svg>
            </div>
            <span
              className="text-base font-black text-[#e8eaf6] tracking-wider"
              style={{ fontFamily: "var(--font-orbitron, 'Orbitron', sans-serif)" }}
            >
              3D{" "}
              <span className="text-[#00e5ff]">Kame</span>{" "}
              House
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#90a4ae] hover:text-[#00e5ff] transition-colors duration-200 rounded-lg hover:bg-[#00e5ff]/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#00e5ff] text-[#050510] text-sm font-bold hover:bg-[#00b4cc] hover:shadow-lg hover:shadow-[#00e5ff]/30 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contactar
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-[#90a4ae] hover:text-[#00e5ff] hover:bg-[#00e5ff]/5 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050510]/98 backdrop-blur-md border-t border-[#1a1a3e]">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block px-4 py-2.5 text-sm font-medium text-[#90a4ae] hover:text-[#00e5ff] hover:bg-[#00e5ff]/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#contacto"
                onClick={handleNavClick}
                className="block w-full text-center px-4 py-2.5 rounded-lg bg-[#00e5ff] text-[#050510] text-sm font-bold hover:bg-[#00b4cc] transition-colors"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
