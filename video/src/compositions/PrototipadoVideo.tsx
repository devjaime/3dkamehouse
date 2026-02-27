import { Composition, Sequence, AbsoluteFill } from "remotion";
import { BrandIntro } from "../shared/BrandIntro";
import { StepSlide } from "../shared/StepSlide";
import { OutroSlide } from "../shared/OutroSlide";
import { COLORS, VIDEO_WIDTH, VIDEO_HEIGHT, VIDEO_FPS, SECONDS } from "../shared/theme";

const ACCENT = COLORS.cyan;
const TOTAL_STEPS = 4;

// SVG icon paths for each step (Heroicons outline)
const ICONS = {
  design:     "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
  slicer:     "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
  printing:   "M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z",
  delivery:   "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
};

const STEPS = [
  {
    title: "Diseño CAD / STL",
    description: "Recibimos tu archivo de diseño o lo creamos desde cero con herramientas CAD profesionales.",
    icon: ICONS.design,
    details: [
      "Formatos aceptados: STL, OBJ, STEP, SolidWorks",
      "Optimización automática para impresión FDM",
      "Revisión de geometría y paredes mínimas",
      "Feedback en 24 horas hábiles",
    ],
  },
  {
    title: "Slicing & Configuración",
    description: "Generamos el código G con parámetros optimizados para tu proyecto específico.",
    icon: ICONS.slicer,
    details: [
      "Resolución de capa: 0.1mm – 0.3mm",
      "Infill configurable: 15% – 100%",
      "Soportes automáticos o manuales",
      "Estimación exacta de tiempo y material",
    ],
  },
  {
    title: "Impresión FDM",
    description: "Tu prototipo toma forma capa por capa con materiales de alta calidad.",
    icon: ICONS.printing,
    details: [
      "Temperatura nozzle calibrada por material",
      "Monitoreo en tiempo real del proceso",
      "Cama calefaccionada para adherencia perfecta",
      "Control de calidad durante impresión",
    ],
  },
  {
    title: "Control de Calidad",
    description: "Cada pieza pasa por inspección dimensional antes de ser entregada.",
    icon: ICONS.delivery,
    details: [
      "Medición con calibrador digital ±0.1mm",
      "Revisión visual de capas y superficies",
      "Post-proceso: lijado o pintura (opcional)",
      "Entrega con informe de calidad",
    ],
  },
];

// Duration per section
const INTRO_DUR  = SECONDS(2.5);
const STEP_DUR   = SECONDS(5);
const OUTRO_DUR  = SECONDS(3);
const TOTAL_DUR  = INTRO_DUR + STEPS.length * STEP_DUR + OUTRO_DUR;

export const PrototipadoComposition: React.FC = () => {
  const frame  = 0; // will be driven by Remotion runtime
  return (
    <AbsoluteFill style={{ background: COLORS.surface }}>
      {/* Brand intro */}
      <Sequence from={0} durationInFrames={INTRO_DUR}>
        <BrandIntro subtitle="Prototipado Rápido" accentColor={ACCENT} />
      </Sequence>

      {/* Step slides */}
      {STEPS.map((step, i) => (
        <Sequence key={i} from={INTRO_DUR + i * STEP_DUR} durationInFrames={STEP_DUR}>
          <StepSlide
            stepNumber={i + 1}
            totalSteps={TOTAL_STEPS}
            title={step.title}
            description={step.description}
            icon={step.icon}
            accentColor={ACCENT}
            details={step.details}
          />
        </Sequence>
      ))}

      {/* Outro */}
      <Sequence from={INTRO_DUR + STEPS.length * STEP_DUR} durationInFrames={OUTRO_DUR}>
        <OutroSlide
          serviceTitle="Prototipado Rápido"
          accentColor={ACCENT}
          callToAction="¿Tienes un Diseño? ¡Imprímelo!"
        />
      </Sequence>
    </AbsoluteFill>
  );
};

// Export composition definition for use in Root
export const PrototipadoCompositionDef = {
  id: "PrototipadoVideo",
  component: PrototipadoComposition,
  durationInFrames: TOTAL_DUR,
  fps: VIDEO_FPS,
  width: VIDEO_WIDTH,
  height: VIDEO_HEIGHT,
};
