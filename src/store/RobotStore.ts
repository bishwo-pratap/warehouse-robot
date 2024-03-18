import { create } from "zustand";
import { ActionCommands } from "@/types/robotActions";
import { RobotState } from "@/types/robotStore";
import {
  EastWall,
  InitialRobotPosition,
  NorthWall,
  SouthWall,
  WestWall,
} from "@/constants";

const useRobotStore = create<RobotState>((set) => ({
  robotPosition: InitialRobotPosition,
  handleActions: (actionCmds: ActionCommands) => {
    set((state: RobotState) => {
      let newRobotPosition = { ...state.robotPosition };

      switch (actionCmds) {
        case "E":
          if (newRobotPosition.x < EastWall) newRobotPosition.x++;
          break;
        case "W":
          if (newRobotPosition.x > WestWall) newRobotPosition.x--;
          break;
        case "N":
          if (newRobotPosition.y > SouthWall) newRobotPosition.y--;
          break;
        case "S":
          if (newRobotPosition.y < NorthWall) newRobotPosition.y++;
          break;
      }

      return {
        robotPosition: newRobotPosition,
      };
    });
  },
}));

export default useRobotStore;
