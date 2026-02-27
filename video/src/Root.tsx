import { Composition } from "remotion";
import { PrototipadoCompositionDef, PrototipadoComposition } from "./compositions/PrototipadoVideo";
import { PiezasTecnicasCompositionDef, PiezasTecnicasComposition } from "./compositions/PiezasTecnicasVideo";
import { ProductoPersonalizadoCompositionDef, ProductoPersonalizadoComposition } from "./compositions/ProductoPersonalizadoVideo";

/**
 * Root — registra todas las composiciones de video de 3D Kame House.
 *
 * Para previsualizar: cd video && npx remotion studio
 * Para renderizar:   npm run render:all
 */
export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id={PrototipadoCompositionDef.id}
        component={PrototipadoComposition}
        durationInFrames={PrototipadoCompositionDef.durationInFrames}
        fps={PrototipadoCompositionDef.fps}
        width={PrototipadoCompositionDef.width}
        height={PrototipadoCompositionDef.height}
      />

      <Composition
        id={PiezasTecnicasCompositionDef.id}
        component={PiezasTecnicasComposition}
        durationInFrames={PiezasTecnicasCompositionDef.durationInFrames}
        fps={PiezasTecnicasCompositionDef.fps}
        width={PiezasTecnicasCompositionDef.width}
        height={PiezasTecnicasCompositionDef.height}
      />

      <Composition
        id={ProductoPersonalizadoCompositionDef.id}
        component={ProductoPersonalizadoComposition}
        durationInFrames={ProductoPersonalizadoCompositionDef.durationInFrames}
        fps={ProductoPersonalizadoCompositionDef.fps}
        width={ProductoPersonalizadoCompositionDef.width}
        height={ProductoPersonalizadoCompositionDef.height}
      />
    </>
  );
};
