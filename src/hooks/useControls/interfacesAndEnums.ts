export enum EControlsAplyTo {
  ROBOT = "robot",
  BONE = "bone",
}

export enum EControlsActionTypes {
  GLOBAL = "global",
  LOCAL = "local",
}

export enum EActionsInterface {
  POSITION = "position",
  ROTATION = "rotation",
  ROTATEY = "rotateY",
  ROTATEX = "rotateX",
  ROTATEZ = "rotateZ",
  TRANSLATEZ = "translateZ",
}

export interface ActionInterface {
  action: EActionsInterface;
  axis: "x" | "y" | "z";
  sign: 1 | -1;
  aplyTo: EControlsAplyTo;
  aplyIn: EControlsActionTypes;
  velocity?: number;
}

export interface ControlsInterface {
  [key: string]: {
    state: boolean;
    actions: ActionInterface[];
  };
}
