import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Canvas } from "@react-three/fiber";
import "./assets/styles/app.css";
import Grow from "./components/world/Grow";
import CollitionsHandler from "./components/CollitionsHandler";
import { Portfolio } from "./components/cards/Portfolio";
import { Box3Helper } from "three";

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
  isCardVisible: false,
  cardName: null,
};

export const BoxesContext = createContext<IBoxesCtxState>({
  setCtx: null!,
  ctx: BoxesCtxState,
});

const proyects = { portfolio: Portfolio } as any;

function App() {
  const [ctx, setCtx] = useState<IBoxesState>(BoxesCtxState);
  const Component = proyects[ctx.cardName || ""];

  return (
    <BoxesContext.Provider value={{ setCtx, ctx }}>
      <Canvas className="canvas">
        <ambientLight position={[100, 100, 20]} />
        <Grow />
        <CollitionsHandler />
      </Canvas>

      {ctx.isCardVisible && Component && <Component />}
    </BoxesContext.Provider>
  );
}

export default App;
