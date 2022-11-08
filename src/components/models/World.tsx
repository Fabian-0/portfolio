import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Group, Mesh } from "three";
import { GLTFResult } from "../../types";

export default function World() {

  const group = useRef<Group>(null!);
  const { nodes, materials, animations } = useGLTF(
    "./models/portfolio.glb"
  ) as unknown as GLTFResult<Mesh>;
  const { actions } = useAnimations(animations, group);

  const actionNames = Object.keys(actions);
  actions[actionNames[0]]?.play();
  actions[actionNames[1]]?.play();

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <mesh
          name="Texto"
          geometry={nodes.Texto.geometry}
          material={materials["Material.003"]}
          position={[0.01, 0, 13]}
        />
        <mesh
          name="Texto002"
          geometry={nodes.Texto002.geometry}
          material={materials["Material.003"]}
          position={[-4.56, 0, 15.98]}
        />
        <mesh
          name="Texto004"
          geometry={nodes.Texto004.geometry}
          material={materials["Material.003"]}
          position={[0.67, 0, 16.94]}
        />
        <mesh
          name="Texto006"
          geometry={nodes.Texto006.geometry}
          material={materials["Material.003"]}
          position={[3.26, 0, 16]}
        />
        <mesh
          name="Texto007"
          geometry={nodes.Texto007.geometry}
          material={materials["Material.003"]}
          position={[0.01, 0, 18.96]}
        />
        <mesh
          name="Texto008"
          geometry={nodes.Texto008.geometry}
          material={materials["Material.003"]}
          position={[-6.33, 0, 19.99]}
        />
        <mesh
          name="Texto001"
          geometry={nodes.Texto001.geometry}
          material={materials["Material.003"]}
          position={[0.18, 0, 15.86]}
        />
        <mesh
          name="Plano002"
          geometry={nodes.Plano002.geometry}
          material={materials["Material.007"]}
          position={[0.52, 0, 15.5]}
          scale={0.09}
        />
        <mesh
          name="Plano001"
          geometry={nodes.Plano001.geometry}
          material={materials["Material.007"]}
          position={[1.52, 0, 15.5]}
          scale={0.09}
        />
        <mesh
          name="Texto003"
          geometry={nodes.Texto003.geometry}
          material={materials["Material.003"]}
          position={[1.01, 0, 15.85]}
        />
        <mesh
          name="Texto009"
          geometry={nodes.Texto009.geometry}
          material={materials["Material.003"]}
          position={[1.08, 0, 14.82]}
          scale={0.78}
        />
        <mesh
          name="Plano003"
          geometry={nodes.Plano003.geometry}
          material={materials["Material.007"]}
          position={[1.51, 0, 14.5]}
          scale={0.09}
        />
        <mesh
          name="Plano004"
          geometry={nodes.Plano004.geometry}
          material={materials["Material.007"]}
          position={[1.52, 0, 15.5]}
          scale={0.09}
        />
        <mesh
          name="Texto005"
          geometry={nodes.Texto005.geometry}
          material={materials["Material.003"]}
          position={[2.14, 0, 15.83]}
        />
        <mesh
          name="Círculo"
          geometry={nodes.Círculo.geometry}
          material={materials["Material.017"]}
          position={[1.48, 0, 20.48]}
        />
        <mesh
          name="Círculo001"
          geometry={nodes.Círculo001.geometry}
          material={materials["Material.004"]}
          position={[1.48, 0, 20.48]}
        />
        <mesh
          name="poster_1"
          geometry={nodes.poster_1.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          name="poster_1001"
          geometry={nodes.poster_1001.geometry}
          material={materials.Material}
        />
        <mesh
          name="poster_2"
          geometry={nodes.poster_2.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          name="poster_2001"
          geometry={nodes.poster_2001.geometry}
          material={materials.Material}
        />
        <mesh
          name="poster_3001"
          geometry={nodes.poster_3001.geometry}
          material={materials.Material}
        />
        <mesh
          name="poster_3"
          geometry={nodes.poster_3.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          name="poster_4"
          geometry={nodes.poster_4.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          name="poster_4001"
          geometry={nodes.poster_4001.geometry}
          material={materials.Material}
        />
        <mesh
          name="poster_5"
          geometry={nodes.poster_5.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          name="poster_5001"
          geometry={nodes.poster_5001.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          name="Texto010"
          geometry={nodes.Texto010.geometry}
          material={materials["Material.011"]}
          position={[-5.34, 2.03, 11.02]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Texto011"
          geometry={nodes.Texto011.geometry}
          material={materials["Material.012"]}
          position={[18.52, 2.29, -19.67]}
          rotation={[Math.PI / 2, 0, Math.PI / 4]}
          scale={0.75}
        />
        <mesh
          name="Texto012"
          geometry={nodes.Texto012.geometry}
          material={materials["Material.012"]}
          position={[-19.41, 2.27, -18.79]}
          rotation={[Math.PI / 2, 0, -Math.PI / 4]}
          scale={0.75}
        />
        <mesh
          name="base_arbol001"
          geometry={nodes.base_arbol001.geometry}
          material={materials["Material.001"]}
          scale={3}
        />
        <mesh
          name="base_cesped"
          geometry={nodes.base_cesped.geometry}
          material={materials["Material.008"]}
          scale={3}
        />
        <mesh
          name="cesped"
          geometry={nodes.cesped.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          name="tree"
          geometry={nodes.tree.geometry}
          material={materials["Material.009"]}
        >
          <mesh
            name="leaves"
            geometry={nodes.leaves.geometry}
            material={materials["Material.010"]}
          />
        </mesh>
        <mesh
          name="Círculo002"
          geometry={nodes.Círculo002.geometry}
          material={materials["Material.022"]}
          position={[2.81, 0, 4.08]}
          rotation={[0, -0.22, 0]}
        />
        <mesh
          name="Texto013"
          geometry={nodes.Texto013.geometry}
          material={materials["Material.021"]}
          position={[2.17, 0.01, 4.42]}
          rotation={[0, 0.66, 0]}
          scale={0.68}
        />
        <mesh
          name="Círculo003"
          geometry={nodes.Círculo003.geometry}
          material={materials["Material.022"]}
          position={[4.65, 0, -1.34]}
          rotation={[0, 1.04, 0]}
        />
        <mesh
          name="Texto014"
          geometry={nodes.Texto014.geometry}
          material={materials["Material.021"]}
          position={[4.78, 0.01, -0.63]}
          rotation={[-Math.PI, 1.21, -Math.PI]}
          scale={0.68}
        />
        <mesh
          name="Círculo004"
          geometry={nodes.Círculo004.geometry}
          material={materials["Material.022"]}
          position={[0.38, 0, -4.81]}
          rotation={[-Math.PI, 0.95, -Math.PI]}
        />
        <mesh
          name="Texto015"
          geometry={nodes.Texto015.geometry}
          material={materials["Material.021"]}
          position={[1.09, 0.01, -4.64]}
          rotation={[-Math.PI, 0.06, -Math.PI]}
          scale={0.68}
        />
        <mesh
          name="Círculo005"
          geometry={nodes.Círculo005.geometry}
          material={materials["Material.022"]}
          position={[-4.54, 0, -1.82]}
          rotation={[Math.PI, -0.23, Math.PI]}
        />
        <mesh
          name="Texto016"
          geometry={nodes.Texto016.geometry}
          material={materials["Material.021"]}
          position={[-4.11, 0.01, -2.4]}
          rotation={[Math.PI, -1.12, Math.PI]}
          scale={0.68}
        />
        <mesh
          name="Círculo006"
          geometry={nodes.Círculo006.geometry}
          material={materials["Material.022"]}
          position={[-3.03, 0, 3.87]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          name="Texto017"
          geometry={nodes.Texto017.geometry}
          material={materials["Material.021"]}
          position={[-3.5, 0.01, 3.32]}
          rotation={[0, -0.68, 0]}
          scale={0.68}
        />
        <mesh
          name="Círculo007"
          geometry={nodes.Círculo007.geometry}
          material={materials["Material.022"]}
          position={[-17.72, 0, -18.79]}
          rotation={[0, 0.04, 0]}
        />
        <mesh
          name="Texto018"
          geometry={nodes.Texto018.geometry}
          material={materials["Material.021"]}
          position={[-18.25, 0.01, -18.29]}
          rotation={[0, 0.93, 0]}
          scale={0.68}
        />
        <mesh
          name="Círculo008"
          geometry={nodes.Círculo008.geometry}
          material={materials["Material.022"]}
          position={[18.73, 0, -17.63]}
          rotation={[Math.PI, -1.52, Math.PI]}
        />
        <mesh
          name="Texto019"
          geometry={nodes.Texto019.geometry}
          material={materials["Material.021"]}
          position={[18.29, 0.01, -18.2]}
          rotation={[0, -0.73, 0]}
          scale={0.68}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  "./models/portfolio.glb"
)