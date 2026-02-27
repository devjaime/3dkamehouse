# 3D Kame House — Videos Explicativos (Remotion)

Videos generados con [Remotion](https://remotion.dev) que explican cada tipo de servicio de 3D Kame House.

## Videos disponibles

| ID | Descripción | Duración |
|---|---|---|
| `PrototipadoVideo` | Proceso de prototipado rápido FDM | ~22s |
| `PiezasTecnicasVideo` | Flujo de fabricación de piezas técnicas | ~22s |
| `ProductoPersonalizadoVideo` | Creación de productos personalizados | ~22s |

## Instalación

```bash
cd video
npm install
```

## Previsualizar en Remotion Studio

```bash
npm start
# Abre http://localhost:3000 con previsualización interactiva
```

## Renderizar videos

```bash
# Un video específico
npm run render:prototipado
npm run render:piezas
npm run render:personalizado

# Todos a la vez
npm run render:all
```

Los videos se guardan en `video/out/`.

## Estructura

```
video/
├── src/
│   ├── Root.tsx                        # Registro de composiciones
│   ├── index.ts                        # Entry point Remotion
│   ├── shared/
│   │   ├── theme.ts                    # Tokens de diseño (colores, fuentes)
│   │   ├── BrandIntro.tsx              # Intro animada 3D Kame House
│   │   ├── StepSlide.tsx               # Slide de paso del proceso
│   │   └── OutroSlide.tsx              # Cierre con CTA y contacto
│   └── compositions/
│       ├── PrototipadoVideo.tsx
│       ├── PiezasTecnicasVideo.tsx
│       └── ProductoPersonalizadoVideo.tsx
├── remotion.config.ts
└── package.json
```
