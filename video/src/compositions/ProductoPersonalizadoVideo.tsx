import { AbsoluteFill, Sequence } from "remotion";
import { BrandIntro } from "../shared/BrandIntro";
import { StepSlide } from "../shared/StepSlide";
import { OutroSlide } from "../shared/OutroSlide";
import { COLORS, VIDEO_WIDTH, VIDEO_HEIGHT, VIDEO_FPS, SECONDS } from "../shared/theme";

const ACCENT = COLORS.violetLight;
const TOTAL_STEPS = 4;

const ICONS = {
  idea:    "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  model:   "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
  print:   "M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z",
  finish:  "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
};

const STEPS = [
  {
    title: "Tu Idea es el Límite",
    description: "Cuéntanos tu visión: figuras, accesorios, arte, trofeos o cualquier objeto único que imagines.",
    icon: ICONS.idea,
    details: [
      "Recibimos bocetos, fotos o referencias visuales",
      "Consultoría gratuita de viabilidad técnica",
      "Cotización personalizada sin compromiso",
      "Desde 1 unidad hasta producción en serie",
    ],
  },
  {
    title: "Modelado 3D Creativo",
    description: "Nuestro equipo transforma tu idea en un modelo 3D listo para impresión.",
    icon: ICONS.model,
    details: [
      "Modelado artístico y técnico en Blender / Fusion 360",
      "Revisiones ilimitadas hasta tu aprobación",
      "Esculturas digitales de alta resolución",
      "Formato STL/OBJ entregable si lo deseas",
    ],
  },
  {
    title: "Impresión con Colores",
    description: "Elegimos el material y color perfecto para que tu objeto luzca exactamente como lo imaginaste.",
    icon: ICONS.print,
    details: [
      "Más de 20 colores de filamento disponibles",
      "Materiales: PLA Silk, Mármol, Madera, Metálico",
      "Impresión multicolor con cambio de filamento",
      "Resina para detalles ultra finos",
    ],
  },
  {
    title: "Acabado & Presentación",
    description: "Post-proceso profesional para que tu producto personalizado luzca impecable.",
    icon: ICONS.finish,
    details: [
      "Lijado y suavizado de superficies",
      "Pintura acrílica o aerógrafo (opcional)",
      "Barniz protector UV anti-humedad",
      "Embalaje regalo para entrega especial",
    ],
  },
];

const INTRO_DUR = SECONDS(2.5);
const STEP_DUR  = SECONDS(5);
const OUTRO_DUR = SECONDS(3);
const TOTAL_DUR = INTRO_DUR + STEPS.length * STEP_DUR + OUTRO_DUR;

export const ProductoPersonalizadoComposition: React.FC = () => (
  <AbsoluteFill style={{ background: COLORS.surface }}>
    <Sequence from={0} durationInFrames={INTRO_DUR}>
      <BrandIntro subtitle="Productos Personalizados" accentColor={ACCENT} />
    </Sequence>

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

    <Sequence from={INTRO_DUR + STEPS.length * STEP_DUR} durationInFrames={OUTRO_DUR}>
      <OutroSlide
        serviceTitle="Productos Personalizados"
        accentColor={ACCENT}
        callToAction="Tu Objeto Único, Hecho Realidad"
      />
    </Sequence>
  </AbsoluteFill>
);

export const ProductoPersonalizadoCompositionDef = {
  id: "ProductoPersonalizadoVideo",
  component: ProductoPersonalizadoComposition,
  durationInFrames: TOTAL_DUR,
  fps: VIDEO_FPS,
  width: VIDEO_WIDTH,
  height: VIDEO_HEIGHT,
};
