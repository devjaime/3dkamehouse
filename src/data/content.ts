// Contenido completo del sitio 3D Kame House en español (Chile)

export const COMPANY = {
  name: "3D Kame House",
  rut: "15.458.517-6",
  tagline: "Impresiones 3D de Alta Precisión",
  description:
    "Empresa chilena especializada en impresión 3D para prototipos, piezas técnicas y productos personalizados. Tecnología de fabricación aditiva al servicio de tus proyectos en Santiago y todo Chile.",
  shortDescription:
    "Transformamos ideas digitales en objetos físicos con tecnología de fabricación aditiva de alta precisión.",
  email: "contacto@3dkamehouse.cl",
  whatsapp: "56949288019",
  location: "Santiago, Chile",
  founded: "2020",
};

export const OWNER = {
  name: "Jaime Hernández",
  role: "Supervisor de Operaciones",
  initials: "JH",
  bio: "Fundador y Supervisor de Operaciones de 3D Kame House. Lidera el equipo técnico con experiencia en fabricación digital, manufactura aditiva y gestión de proyectos tecnológicos en el ecosistema chileno.",
  email: "hernandez.hs@gmail.com",
  whatsapp: "56949288019",
  specialties: [
    "Fabricación aditiva y manufactura digital",
    "Gestión y supervisión de operaciones",
    "Selección y calibración de materiales 3D",
    "Optimización de procesos productivos",
  ],
};

export const PROJECT_LEAD = {
  name: "Cristian Garcia Salazar",
  role: "Jefe de Proyectos e Innovación",
  initials: "CG",
  bio: "Profesional en gestión de proyectos tecnológicos con enfoque en innovación y mejora de procesos. Experto en liderar equipos multidisciplinarios y coordinar stakeholders para transformar ideas en resultados concretos.",
  certPeriod: {
    desde: "16 de octubre del 2020",
    hasta: "10 de abril del 2022",
    tipo: "Contrato Indefinido",
  },
  objetivo:
    "Liderar los proyectos tecnológicos de la organización, velando por la mejora en proyectos, actualización de políticas y procesos, además ser el líder de las mesas de trabajo en conjunto con stakeholders y dueños de proyectos.",
  logros: [
    "Mejora integral en proyectos logísticos de la empresa",
    "Liderazgo de proyectos estancados del área comercial",
    "Optimización de tiempos de respuesta al cliente final",
    "Mejora del artefacto de venta de productos: «Requerimientos de producto»",
  ],
  skills: ["Gestión de Proyectos", "Innovación", "Lean Process", "Stakeholders", "Agile"],
};

export const SERVICES = [
  {
    id: "prototipado",
    title: "Prototipado Rápido",
    description:
      "De tu idea al objeto físico en horas. Iteraciones rápidas para validar diseños antes de producción en serie.",
    icon: "cube" as const,
    color: "cyan" as const,
  },
  {
    id: "piezas-tecnicas",
    title: "Piezas Técnicas",
    description:
      "Componentes de precisión para ingeniería, mecánica y electrónica. Tolerancias ajustadas a tus especificaciones.",
    icon: "gear" as const,
    color: "orange" as const,
  },
  {
    id: "personalizados",
    title: "Productos Personalizados",
    description:
      "Esculturas, figuras, accesorios y objetos únicos. Llevamos tus archivos STL o ideas a la realidad tangible.",
    icon: "star" as const,
    color: "violet" as const,
  },
  {
    id: "consultoria",
    title: "Consultoría en Diseño 3D",
    description:
      "Asesoría profesional en diseño para impresión 3D, selección de materiales y optimización de archivos STL.",
    icon: "lightbulb" as const,
    color: "cyan" as const,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Sistema de Gestión Logística",
    category: "Innovación Operacional",
    description:
      "Rediseño integral del sistema logístico interno, logrando reducción significativa de tiempos de entrega y mejora en trazabilidad de pedidos.",
    tech: ["Gestión de Proyectos", "Lean Manufacturing", "KPIs", "Proceso"],
    lead: "Cristian Garcia Salazar",
    color: "cyan" as const,
    period: "2020 - 2021",
  },
  {
    id: 2,
    title: "Artefacto «Requerimientos de Producto»",
    category: "Optimización Comercial",
    description:
      "Creación y mejora del artefacto de venta «Requerimientos de producto», estandarizando el proceso de cotización y mejorando la respuesta al cliente final.",
    tech: ["Product Management", "Documentación", "UX Comercial", "Estandarización"],
    lead: "Cristian Garcia Salazar",
    color: "orange" as const,
    period: "2021",
  },
  {
    id: 3,
    title: "Mesa de Trabajo Interdisciplinaria",
    category: "Liderazgo Estratégico",
    description:
      "Liderazgo de mesas de trabajo con stakeholders y dueños de proyectos para desbloquear iniciativas comerciales estratégicas estancadas.",
    tech: ["Facilitación", "Agile", "Business Analysis", "Stakeholders"],
    lead: "Cristian Garcia Salazar",
    color: "violet" as const,
    period: "2020 - 2022",
  },
];

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Videos", href: "#como-trabajamos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Certificación", href: "#certificacion" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const STATS = [
  { value: "500+", label: "Proyectos" },
  { value: "3", label: "Tecnologías" },
  { value: "100%", label: "Chile" },
  { value: "2020", label: "Fundación" },
];

export const TERMINAL_LINES = [
  { prefix: "[PrinterAgent]", text: "Iniciando impresión: prototipo_cliente_03.stl", color: "cyan" },
  { prefix: "[SlicerAgent] ", text: "Generando 247 capas @ 0.2mm resolución...", color: "violet" },
  { prefix: "[HeatAgent]  ", text: "Temperatura nozzle: 215°C  |  Cama: 60°C ✓", color: "orange" },
  { prefix: "[QualityAgent]", text: "Verificando tolerancias: ±0.1mm — APROBADO ✓", color: "green" },
  { prefix: "[System]     ", text: "Impresión completada. Tiempo: 3h 47m 12s", color: "cyan" },
];
