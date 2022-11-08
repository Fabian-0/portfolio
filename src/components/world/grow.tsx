import React from "react";

export default function Grow() {
  return (
    <mesh
      rotation={[Math.PI / -2, 0, 0]}
      position={[0, 0, 10]}
    >
      <planeBufferGeometry attach="geometry" args={[200, 200]} />
      <meshPhongMaterial
        attach="material"
        color={0x212534}
      />
    </mesh>
  );
}
