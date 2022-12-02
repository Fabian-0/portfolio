import { useThree } from "@react-three/fiber";
import React, { useContext, useEffect } from "react";
import { BoxesContext } from "../App";
import { CollitionData } from "../constants/collitionBoxesData";
import { useCollitions } from "../hooks/useCollitions";
import Robot from "./models/Robot";
import World from "./models/World";

// export interface IAppProps {
// }

export default function CollitionsHandler() {
  const { scene } = useThree();
  const boxes = useCollitions(CollitionData);
  const { setCtx, ctx } = useContext(BoxesContext);

  useEffect(() => {
    if (boxes.length <= 0) return;
    const updateBoxes = { ...ctx };
    updateBoxes.boxes = boxes;

    setCtx(updateBoxes);
    boxes.forEach((box) => scene.add(box));
    console.log("wrap component");
  }, [boxes]);

  return (
    <>
      <Robot />
      <World />
    </>
  );
}
