import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS, FONTS } from "./theme";

/**
 * BrandIntro — primeros 2 segundos de cada video.
 * Muestra el logo + nombre de la empresa con animación de entrada.
 */
export const BrandIntro: React.FC<{ subtitle: string; accentColor: string }> = ({
  subtitle,
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 12, stiffness: 120 }, from: 0, to: 1 });
  const titleOpacity = interpolate(frame, [10, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subtitleOpacity = interpolate(frame, [25, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const lineWidth = interpolate(frame, [30, 60], [0, 300], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.surface} 0%, ${COLORS.surfaceLight} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
      }}
    >
      {/* Logo hexagon */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          width: 80,
          height: 80,
          borderRadius: 16,
          background: `linear-gradient(135deg, ${accentColor}, ${COLORS.violet})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 40px ${accentColor}60`,
        }}
      >
        <svg viewBox="0 0 40 40" width={48} height={48} fill="none">
          <path d="M20 3L37 12V28L20 37L3 28V12L20 3Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          <path d="M20 3L20 20M37 12L20 20M3 12L20 20" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
        </svg>
      </div>

      {/* Company name */}
      <div style={{ opacity: titleOpacity, textAlign: "center" }}>
        <h1
          style={{
            fontFamily: FONTS.orbitron,
            fontSize: 42,
            fontWeight: 900,
            color: COLORS.textPrimary,
            margin: 0,
            letterSpacing: 6,
          }}
        >
          3D <span style={{ color: accentColor }}>KAME</span> HOUSE
        </h1>
      </div>

      {/* Divider line */}
      <div
        style={{
          width: lineWidth,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${accentColor}, ${COLORS.violet}, transparent)`,
        }}
      />

      {/* Subtitle */}
      <div style={{ opacity: subtitleOpacity, textAlign: "center" }}>
        <p
          style={{
            fontFamily: FONTS.mono,
            fontSize: 16,
            color: accentColor,
            margin: 0,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </p>
      </div>
    </AbsoluteFill>
  );
};
