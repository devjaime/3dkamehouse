import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS, FONTS } from "./theme";

interface OutroSlideProps {
  serviceTitle: string;
  accentColor: string;
  callToAction: string;
}

/**
 * OutroSlide — cierre de cada video con CTA y datos de contacto.
 */
export const OutroSlide: React.FC<OutroSlideProps> = ({ serviceTitle, accentColor, callToAction }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scaleIn  = spring({ frame, fps, config: { damping: 12, stiffness: 100 }, from: 0.8, to: 1 });
  const opacity  = interpolate(frame, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ctaScale = spring({ frame: frame - 30, fps, config: { damping: 10, stiffness: 120 }, from: 0, to: 1 });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at center, ${accentColor}15 0%, ${COLORS.surface} 70%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        opacity,
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${accentColor}03 1px, transparent 1px),
            linear-gradient(90deg, ${accentColor}03 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div style={{ transform: `scale(${scaleIn})`, textAlign: "center", position: "relative" }}>
        {/* Service label */}
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 14,
            color: accentColor,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          {serviceTitle}
        </div>

        {/* Main headline */}
        <h2
          style={{
            fontFamily: FONTS.orbitron,
            fontSize: 54,
            fontWeight: 900,
            color: COLORS.textPrimary,
            margin: "0 0 16px 0",
            lineHeight: 1.1,
          }}
        >
          {callToAction}
        </h2>

        {/* Divider */}
        <div
          style={{
            width: 400,
            height: 1,
            margin: "24px auto",
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          }}
        />

        {/* Contact info */}
        <div style={{ display: "flex", gap: 48, justifyContent: "center", marginTop: 16 }}>
          {[
            { label: "EMAIL", value: "contacto@3dkamehouse.cl", color: COLORS.cyan },
            { label: "WHATSAPP", value: "+56 9 4928 8019", color: COLORS.green },
            { label: "CIUDAD", value: "Santiago, Chile", color: COLORS.violetLight },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 10,
                  color: COLORS.textMuted,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {label}
              </div>
              <div style={{ fontFamily: FONTS.mono, fontSize: 15, color, fontWeight: 600 }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div
          style={{
            marginTop: 40,
            transform: `scale(${ctaScale})`,
            display: "inline-block",
          }}
        >
          <div
            style={{
              padding: "18px 48px",
              borderRadius: 12,
              background: `linear-gradient(135deg, ${accentColor}, ${COLORS.cyanDark})`,
              fontFamily: FONTS.orbitron,
              fontSize: 18,
              fontWeight: 700,
              color: COLORS.surface,
              letterSpacing: 2,
              boxShadow: `0 0 40px ${accentColor}40`,
            }}
          >
            COTIZAR AHORA
          </div>
        </div>
      </div>

      {/* Logo bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: FONTS.orbitron,
          fontSize: 13,
          color: COLORS.textMuted,
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        3D KAME HOUSE · RUT 15.458.517-6
      </div>
    </AbsoluteFill>
  );
};
