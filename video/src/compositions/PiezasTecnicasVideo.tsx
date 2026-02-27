import { AbsoluteFill, Sequence } from "remotion";
import { BrandIntro } from "../shared/BrandIntro";
import { StepSlide } from "../shared/StepSlide";
import { OutroSlide } from "../shared/OutroSlide";
import { COLORS, VIDEO_WIDTH, VIDEO_HEIGHT, VIDEO_FPS, SECONDS } from "../shared/theme";

const ACCENT = COLORS.orange;
const TOTAL_STEPS = 4;

const ICONS = {
  spec:   "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  cad:    "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
  print:  "M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z",
  measure:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
};

const STEPS = [
  {
    title: "Especificaciones Técnicas",
    description: "Analizamos tus requerimientos de ingeniería para seleccionar el proceso y material óptimo.",
    icon: ICONS.spec,
    details: [
      "Análisis de cargas y esfuerzos mecánicos",
      "Selección de material: PLA, ABS, PETG, Nylon, TPU",
      "Definición de tolerancias dimensionales",
      "Compatibilidad con ensambles existentes",
    ],
  },
  {
    title: "Ingeniería de Diseño",
    description: "Modelado CAD optimizado para fabricación aditiva con geometrías funcionales.",
    icon: ICONS.cad,
    details: [
      "Diseño DfAM (Design for Additive Manufacturing)",
      "Optimización topológica de la pieza",
      "Reducción de peso sin perder resistencia",
      "Simulación de ensamble virtual",
    ],
  },
  {
    title: "Fabricación de Precisión",
    description: "Impresión con parámetros de alta fidelidad para componentes funcionales reales.",
    icon: ICONS.print,
    details: [
      "Resolución de capa: 0.1mm – 0.15mm",
      "Infill técnico: 60% – 100% según carga",
      "Orientación óptima para resistencia máxima",
      "Temperatura y velocidad calibradas por lote",
    ],
  },
  {
    title: "Metrología & Entrega",
    description: "Verificación dimensional con instrumental calibrado y certificación de conformidad.",
    icon: ICONS.measure,
    details: [
      "Medición con calibrador Mitutoyo ±0.02mm",
      "Verificación contra plano CAD (GD&T)",
      "Informe dimensional completo adjunto",
      "Embalaje técnico para transporte seguro",
    ],
  },
];

const INTRO_DUR = SECONDS(2.5);
const STEP_DUR  = SECONDS(5);
const OUTRO_DUR = SECONDS(3);
const TOTAL_DUR = INTRO_DUR + STEPS.length * STEP_DUR + OUTRO_DUR;

export const PiezasTecnicasComposition: React.FC = () => (
  <AbsoluteFill style={{ background: COLORS.surface }}>
    <Sequence from={0} durationInFrames={INTRO_DUR}>
      <BrandIntro subtitle="Piezas Técnicas de Ingeniería" accentColor={ACCENT} />
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
        serviceTitle="Piezas Técnicas"
        accentColor={ACCENT}
        callToAction="Piezas de Ingeniería a tu Medida"
      />
    </Sequence>
  </AbsoluteFill>
);

export const PiezasTecnicasCompositionDef = {
  id: "PiezasTecnicasVideo",
  component: PiezasTecnicasComposition,
  durationInFrames: TOTAL_DUR,
  fps: VIDEO_FPS,
  width: VIDEO_WIDTH,
  height: VIDEO_HEIGHT,
};
