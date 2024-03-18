import { ActionCommands } from "./robotActions";
import { Position } from "./position";

export type RobotState = {
  robotPosition: Position;
  handleActions: (actionCmds: ActionCommands) => void;
};
