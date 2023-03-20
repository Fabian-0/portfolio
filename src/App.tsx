import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Canvas } from "@react-three/fiber";
import "./assets/css/app.css";
import Grow from "./components/world/Grow";
import CollitionsHandler from "./components/CollitionsHandler";
import { Portfolio } from "./components/cards/Portfolio";
import { Box3Helper, CineonToneMapping } from "three";
import StyledCard from "./components/cards/StyledCard";

interface IBoxesState {
  boxes: Box3Helper[];
  isCardVisible: boolean;
  cardName: string | null;
}

interface IBoxesCtxState {
  setCtx: Dispatch<SetStateAction<IBoxesState>>;
  ctx: IBoxesState;
}
const BoxesCtxState = {
  boxes: [],
  isCardVisible: true,
  cardName: "portfolio",
  /* isCardVisible: false,
  cardName: null, */
};

export const BoxesContext = createContext<IBoxesCtxState>({
  setCtx: null!,
  ctx: BoxesCtxState,
});

// const proyects: { [key: string]: () => JSX.Element } = { portfolio: Portfolio };

function App() {
  const [ctx, setCtx] = useState<IBoxesState>(BoxesCtxState);
  // const Component = proyects[ctx.cardName || ""];

  return (
    <BoxesContext.Provider value={{ setCtx, ctx }}>
      <Canvas
        className="canvas"
        gl={{ toneMapping: CineonToneMapping, toneMappingExposure: 0.8 }}
      >
        <ambientLight position={[100, 100, 20]} />
        <Grow />
        <CollitionsHandler />
      </Canvas>

      {ctx.isCardVisible && (
        <StyledCard>
          {/* <Component /> */}
        </StyledCard>
      )}
    </BoxesContext.Provider>
  );
}

export default App;
