import { Vector3 } from "three";
import { IBoxData } from "../hooks/useCollitions";

const helperVector = new Vector3(0.5, 0.5, 0.5);
export const CollitionData: IBoxData[] = [
  { position: new Vector3(2.85, 0, 4.1), size: helperVector, name: "portfolio" },
  { position: new Vector3(-3, 0, 4), size: helperVector, name: "rickAndMorty" },
  { position: new Vector3(-4.65, 0, -1.75), size: helperVector, name: "weatherApi" },
  { position: new Vector3(0.35, 0, -4.9), size: helperVector, name: "chat" },
  { position: new Vector3(4.65, 0, -1.4), size: helperVector, name: "trivia" },
  { position: new Vector3(18.72, 0, -17.5), size: helperVector, name: "aboutMe" },
  { position: new Vector3(-17.7, 0, -18.8), size: helperVector, name: "contact" },
];
