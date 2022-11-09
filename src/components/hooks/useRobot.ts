import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Object3D } from "three";
import useControls from "./useControls";
import {
  ActionInterface,
  EControlsActionTypes,
  EControlsAplyTo,
} from "../hooks/useControls/interfacesAndEnums";

// export interface IAppProps {}

export default function useRobot(/* props: IAppProps */) {
  const robot = useRef<Group>(null!);
  const [bone, setBone] = useState<Object3D>(null!);

  const { controls, keys } = useControls();

  useEffect(() => {
    if (!robot.current) return;
    if (!bone) {
      setBone(
        robot.current.children[0].children[0].children[0].children[0]
          .children[0]
      );
      robot.current.rotateY(Math.PI);
      console.log(robot.current);
    }
  }, [robot, bone]);

  useFrame(() => {
    if (!bone) return;
    keys.forEach((key) => {
      const keyInfo = controls[key];
      if (!keyInfo || !keyInfo.state) return;
      keyInfo.actions.forEach((action: ActionInterface) => {
        if (action.aplyTo === EControlsAplyTo.ROBOT) {
          action.aplyIn === EControlsActionTypes.GLOBAL
            ? ((robot.current as any)[action.action][action.axis] +=
                0.1 * action.sign)
            : (robot.current as any)[action.action](0.1 * action.sign);
        } else if (action.aplyTo === EControlsAplyTo.BONE) {
          action.aplyIn === EControlsActionTypes.GLOBAL
            ? ((bone as any)[action.action][action.axis] += 0.1 * action.sign)
            : (bone as any)[action.action](0.1 * action.sign);
          (bone as any)[action.action](0.01 * action.sign);
        }
      });
    });
  });

  return { robot };
}
