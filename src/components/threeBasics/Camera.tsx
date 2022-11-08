import * as React  from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useCamera } from "../hooks/useCamera";

export default function Camera() {
  const cameraRef = useCamera()

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={75}
      position={[0, 4, 30]}
      rotation={[20 * (Math.PI / 180), 0, 0]}
    />
  );
}
