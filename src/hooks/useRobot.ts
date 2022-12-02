import React, { useContext, useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Box3, Box3Helper, Group, Object3D, Vector3 } from "three";
import useControls from "./useControls";
import {
  ActionInterface,
  EControlsActionTypes,
  EControlsAplyTo,
} from "./useControls/interfacesAndEnums";
import { useGLTF } from "@react-three/drei";
import { SkinnedMesh } from "three";
import { GLTFResult } from "../types";
import { BoxesContext } from "../App";

const moveLimits = { x: 45, z: 45 };
const speedMove = 0.1;
const speedRotation = 0.002;
const initialPosition = [0, 0, 23] as const;
const initialRotation = Math.PI;
const collitionBoxSize = new Vector3(0.5, 0.5, 0.5);
const robotCollitions: Box3Helper = new Box3Helper(
  new Box3().setFromCenterAndSize(new Vector3(3.85, 0, 4.1), collitionBoxSize)
);

export interface IUseRobotProps {
  boxes: Box3Helper[];
}

export default function useRobot(props: IUseRobotProps) {
  const { nodes, materials } = useGLTF(
    "./models/robot.glb"
  ) as unknown as GLTFResult<SkinnedMesh>;
  const robot = useRef<Group>(null!);
  const [bone, setBone] = useState<Object3D>(null!);
  const { controls, keys, aceleration, incrementAceleration } = useControls();
  const { scene } = useThree();
  const [isOnCard, setIsOnCard] = useState<boolean | string>(false);

  function isMoving() {
    keys.forEach((key) => {
      const keyInfo = controls[key];
      if (!keyInfo || !keyInfo.state) return;
      keyInfo.actions.forEach((action: ActionInterface) => {
        if (action.aplyTo === EControlsAplyTo.ROBOT) {
          action.aplyIn === EControlsActionTypes.GLOBAL
            ? ((robot.current as any)[action.action][action.axis] +=
                speedMove * action.sign)
            : (robot.current as any)[action.action](
                action.velocity
                  ? action.velocity * action.sign * aceleration
                  : speedMove * action.sign * aceleration
              );

          incrementAceleration();
        } else if (action.aplyTo === EControlsAplyTo.BONE) {
          action.aplyIn === EControlsActionTypes.GLOBAL
            ? ((bone as any)[action.action][action.axis] +=
                speedMove * action.sign)
            : (bone as any)[action.action](
                speedMove * action.sign * aceleration
              );
          (bone as any)[action.action](
            speedRotation * action.sign * aceleration
          );
        }
      });

      robotCollitions.box.setFromCenterAndSize(
        robot.current.position,
        collitionBoxSize
      );
    });
  }

  function needsResetPosition() {
    if (
      robot.current.position.x >= moveLimits.x ||
      robot.current.position.x <= -moveLimits.x ||
      robot.current.position.z >= moveLimits.z ||
      robot.current.position.z <= -moveLimits.z
    ) {
      robot.current.rotateX(0);
      robot.current.rotateY(0);
      robot.current.rotateZ(0);
      robot.current.position.set(...initialPosition);
      robot.current.rotation.set(0, 0, 0);
      return;
    }
  }

  useEffect(() => {
    if (!robot.current) return;
    if (!bone) {
      const saveBone =
        robot.current.children[0].children[0].children[0].children[0]
          .children[0];
      setBone(saveBone);
      robot.current.rotateY(initialRotation);
      robot.current.position.set(...initialPosition);

      robotCollitions.position.set(...initialPosition);
      robotCollitions.box.setFromCenterAndSize(
        robot.current.position,
        collitionBoxSize
      );
      scene.add(robotCollitions);
      console.log("useRobot");
    }
  }, [robot, bone]);

  const { ctx, setCtx } = useContext(BoxesContext);

  function updateCtx(name: string) {
    const updatedCtx = { ...ctx };
    updatedCtx.isCardVisible = true;
    updatedCtx.cardName = name;

    setCtx(updatedCtx);
  }

  useFrame(() => {
    if (!bone || ctx.isCardVisible) return;
    needsResetPosition();
    isMoving();
    if (props.boxes.length) {
      const needsResetName = props.boxes.every((box) => {
        if (robotCollitions.box.intersectsBox(box.box)) {
          if (!ctx.isCardVisible && ctx.cardName === box.name) {
            return false;
          }
          updateCtx(box.name);
          console.log("special boolean");

          return false;
        }
        return true;
      });

      if (ctx.cardName && needsResetName) {
        setCtx((prevState) => ({ ...prevState, cardName: null }));
      }
    }
    // console.log(ctx.cardName);
  });

  return { robot, nodes, materials, robotCollitions, isOnCard };
}
