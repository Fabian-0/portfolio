import React from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import World from "./components/models/World";
import "./assets/styles/app.css";
import Grow from "./components/world/grow";
import Robot from "./components/models/Robot";
import Camera from "./components/threeBasics/Camera";

function App() {

  return (
    <>
      <Canvas className="canvas">
        <Camera />
        <Robot />
        <ambientLight position={[100, 100, 20]} />
        <World />
        <Grow />
        {/* <OrbitControls /> */}
      </Canvas>
      {/* <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => {
          setTest((prevState) => prevState + 0.01);
        }}
      >
        Click me
      </button> */}
    </>
  );
}

export default App;
