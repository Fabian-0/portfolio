import React from "react";
import { useGLTF } from "@react-three/drei";
import { SkinnedMesh } from "three";
import { GLTFResult } from "../../types";
import useRobot from "../hooks/useRobot";

export default function Robot() {
  const { nodes, materials } = useGLTF(
    "./models/robot.glb"
  ) as unknown as GLTFResult<SkinnedMesh>;
  const { robot } = useRobot()

  return (
    <group ref={robot} dispose={null} position={[0, 0, 12]}>
      <group name="Scene">
        <group name="move" position={[0, 0, -1]} rotation={[0.02, 0, 0]}>
          <group name="Bone_2">
            <group name="Esqueleto">
              <primitive object={nodes.Bone} />
              <skinnedMesh
                name="Mesh_1004"
                geometry={nodes.Mesh_1004.geometry}
                material={materials["Standard__1.001"]}
                skeleton={nodes.Mesh_1004.skeleton}
              />
            </group>
            <group name="Esqueleto001">
              <primitive object={nodes.Bone_1} />
              <skinnedMesh
                name="Mesh_1001"
                geometry={nodes.Mesh_1001.geometry}
                material={materials["Standard__1.001"]}
                skeleton={nodes.Mesh_1001.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/robot.glb");
