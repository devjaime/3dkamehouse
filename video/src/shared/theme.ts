// Shared design tokens — match 3D Kame House brand
export const COLORS = {
  surface:     "#050510",
  surfaceLight:"#0a0a1e",
  surfaceCard: "#0f0f2a",
  cyan:        "#00e5ff",
  cyanDark:    "#00b4cc",
  orange:      "#ff6d00",
  orangeLight: "#ff8f00",
  violet:      "#7b2fff",
  violetLight: "#9d5cff",
  green:       "#00e676",
  textPrimary: "#e8eaf6",
  textSecondary:"#90a4ae",
  textMuted:   "#546e7a",
  border:      "#1a1a3e",
};

export const FONTS = {
  orbitron: "'Orbitron', 'Arial Black', sans-serif",
  mono:     "'JetBrains Mono', 'Courier New', monospace",
  inter:    "'Inter', 'Helvetica Neue', sans-serif",
};

// Video dimensions — 16:9
export const VIDEO_WIDTH  = 1280;
export const VIDEO_HEIGHT = 720;
export const VIDEO_FPS    = 30;

// Duration helpers
export const SECONDS = (s: number) => s * VIDEO_FPS;
