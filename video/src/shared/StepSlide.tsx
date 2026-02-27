import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS, FONTS } from "./theme";

interface StepSlideProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;           // SVG path d= string
  accentColor: string;
  details: string[];      // bullet points
  totalSteps: number;
}

/**
 * StepSlide — diapositiva reutilizable para cada paso/etapa del proceso.
 * Anima: icon scale-in, title slide-up, bullets aparecen uno a uno.
 */
export const StepSlide: React.FC<StepSlideProps> = ({
  stepNumber,
  title,
  description,
  icon,
  accentColor,
  details,
  totalSteps,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const iconScale = spring({ frame, fps, config: { damping: 10, stiffness: 100 }, from: 0, to: 1 });
  const titleY    = interpolate(frame, [5, 25], [40, 0],  { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleOp   = interpolate(frame, [5, 25], [0, 1],   { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const descOp    = interpolate(frame, [20, 40], [0, 1],  { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Each bullet appears 8 frames apart starting at frame 35
  const bulletOpacities = details.map((_, i) =>
    interpolate(frame, [35 + i * 8, 50 + i * 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  );

  // Progress bar at bottom
  const progressWidth = (stepNumber / totalSteps) * 100;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(145deg, ${COLORS.surface} 0%, ${COLORS.surfaceCard} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 80px",
      }}
    >
      {/* Grid pattern bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Step number — large background watermark */}
      <div
        style={{
          position: "absolute",
          right: 60,
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: FONTS.orbitron,
          fontSize: 220,
          fontWeight: 900,
          color: accentColor,
          opacity: 0.04,
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {stepNumber}
      </div>

      <div style={{ display: "flex", gap: 60, alignItems: "center", width: "100%", position: "relative" }}>
        {/* Left: icon */}
        <div
          style={{
            transform: `scale(${iconScale})`,
            width: 160,
            height: 160,
            borderRadius: 32,
            background: `${accentColor}12`,
            border: `2px solid ${accentColor}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: `0 0 60px ${accentColor}20`,
          }}
        >
          <svg viewBox="0 0 24 24" width={80} height={80} fill="none" stroke={accentColor} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
            <path d={icon} />
          </svg>
        </div>

        {/* Right: content */}
        <div style={{ flex: 1 }}>
          {/* Step label */}
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 13,
              color: accentColor,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 12,
              opacity: titleOp,
            }}
          >
            PASO {stepNumber} / {totalSteps}
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: FONTS.orbitron,
              fontSize: 46,
              fontWeight: 900,
              color: COLORS.textPrimary,
              margin: "0 0 16px 0",
              lineHeight: 1.1,
              transform: `translateY(${titleY}px)`,
              opacity: titleOp,
            }}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: FONTS.inter,
              fontSize: 20,
              color: COLORS.textSecondary,
              margin: "0 0 28px 0",
              lineHeight: 1.6,
              opacity: descOp,
            }}
          >
            {description}
          </p>

          {/* Bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {details.map((detail, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  opacity: bulletOpacities[i],
                  transform: `translateX(${interpolate(bulletOpacities[i], [0, 1], [-20, 0])}px)`,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: accentColor,
                    boxShadow: `0 0 8px ${accentColor}`,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: FONTS.inter,
                    fontSize: 18,
                    color: COLORS.textSecondary,
                  }}
                >
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background: COLORS.border,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progressWidth}%`,
            background: `linear-gradient(90deg, ${accentColor}, ${COLORS.violet})`,
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Corner brand */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: 30,
          fontFamily: FONTS.mono,
          fontSize: 11,
          color: COLORS.textMuted,
          letterSpacing: 2,
        }}
      >
        3D KAME HOUSE
      </div>
    </AbsoluteFill>
  );
};
