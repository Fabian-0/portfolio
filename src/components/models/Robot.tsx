import React, { useContext } from "react";
import { useGLTF } from "@react-three/drei";
import useRobot from "../../hooks/useRobot";
import Camera from "../threeBasics/Camera";
import { BoxesContext } from "../../App";

export default function Robot() {
  const { ctx } = useContext(BoxesContext);
  const { robot, nodes, materials } = useRobot({ boxes: ctx.boxes });

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
        <Camera />
      </group>
    </group>
  );
}

useGLTF.preload("/robot.glb");
