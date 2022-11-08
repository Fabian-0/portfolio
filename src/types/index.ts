import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type GLTFResult<T> = GLTF & {
  nodes: {
    [key: string]: T;
  };
  materials: { [key: string]: any };
};