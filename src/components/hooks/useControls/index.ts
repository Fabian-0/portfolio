import React, { useEffect, useState } from "react";
import { InitialControlsState } from "./helperState";
import { ControlsInterface } from "./interfacesAndEnums";

// export interface IAppProps {
// }

export default function useControls(/* props: IAppProps */): {
  controls: ControlsInterface;
  keys: string[];
} {
  const [controls, setControls] = useState({ ...InitialControlsState });

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

  return { controls, keys: Object.keys(controls) };
}
