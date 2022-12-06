import React, { useEffect, useState } from "react";
import { InitialControlsState } from "../../constants/controlsHookState";
import { ControlsInterface } from "./interfacesAndEnums";

// Delete this comment before to commit
// export interface IAppProps {
// }

export default function useControls(/* props: IAppProps */): {
  controls: ControlsInterface;
  keys: string[];
  aceleration: number;
  incrementAceleration: () => void;
} {
  const [controls, setControls] = useState({ ...InitialControlsState });
  const [aceleration, setAceleration] = useState(1);

  function handleKeydownEvent(e: KeyboardEvent) {
    const isPressed = controls[e.code];
    if (isPressed === undefined || isPressed.state) return;

    const newState = { ...controls };
    newState[e.code].state = true;

    setControls(newState);
  }

  function handleKeyupEvent(e: KeyboardEvent) {
    const isPressed = controls[e.code];
    if (isPressed?.state) {
      if (e.code === "KeyW") setAceleration(1);
      const newState = { ...controls };
      newState[e.code].state = false;

      setControls(newState);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeydownEvent);
    window.addEventListener("keyup", handleKeyupEvent);
    return () => {
      window.removeEventListener("keydown", handleKeydownEvent);
      window.removeEventListener("keyup", handleKeyupEvent);
    };
  });

  function incrementAceleration() {
    if(aceleration >= 2) return;
    setAceleration((prevState) => (((prevState / 1000) * 2) + prevState));
  }

  return {
    controls,
    keys: Object.keys(controls),
    aceleration,
    incrementAceleration,
  };
}
