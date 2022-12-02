import * as React  from "react";
import { PerspectiveCamera } from "@react-three/drei";

export default function Camera() {
  return (
    <PerspectiveCamera
      makeDefault
      fov={75}
      position={[0, 3, -3]}
      rotation={[Math.PI * 35 / 180, Math.PI, 0]}
    />
  );
}
