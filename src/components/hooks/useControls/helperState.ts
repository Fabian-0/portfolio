import {
  ControlsInterface,
  EActionsInterface,
  EControlsActionTypes,
  EControlsAplyTo,
} from "./interfacesAndEnums";

export const InitialControlsState: ControlsInterface = {
  KeyW: {
    state: false,
    actions: [
      {
        action: EActionsInterface.TRANSLATEZ,
        axis: "z",
        sign: 1,
        aplyIn: EControlsActionTypes.LOCAL,
        aplyTo: EControlsAplyTo.ROBOT,
      },
      {
        action: EActionsInterface.ROTATEX,
        axis: "x",
        sign: 1,
        aplyIn: EControlsActionTypes.LOCAL,
        aplyTo: EControlsAplyTo.BONE,
      },
    ],
  },
  KeyS: {
    state: false,
    actions: [
      {
        action: EActionsInterface.TRANSLATEZ,
        axis: "z",
        sign: -1,
        aplyTo: EControlsAplyTo.ROBOT,
        aplyIn: EControlsActionTypes.LOCAL,
      },
      {
        action: EActionsInterface.ROTATEX,
        axis: "x",
        sign: -1,
        aplyTo: EControlsAplyTo.BONE,
        aplyIn: EControlsActionTypes.LOCAL,
      },
    ],
  },
  KeyA: {
    state: false,
    actions: [
      {
        action: EActionsInterface.ROTATEY,
        axis: "y",
        sign: 1,
        aplyTo: EControlsAplyTo.ROBOT,
        aplyIn: EControlsActionTypes.LOCAL,
      },
    ],
  },
  KeyD: {
    state: false,
    actions: [
      {
        action: EActionsInterface.ROTATEY,
        axis: "y",
        sign: -1,
        aplyTo: EControlsAplyTo.ROBOT,
        aplyIn: EControlsActionTypes.LOCAL,
      },
    ],
  },
};
