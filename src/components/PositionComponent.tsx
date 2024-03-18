import React from 'react';
import { InitialRobotPosition } from "@/constants"
import useRobotStore from "@/store/RobotStore"
import { Position } from "@/types/position"
import { useEffect, useState } from "react"

/**
 * @return Returns the position of the robot
 */
export default function PositionComponent() {
  const [robotPosition, setRobotPosition] = useState<Position>(InitialRobotPosition)
  const positionState = useRobotStore((state) => state.robotPosition)

  useEffect(() => {
    setRobotPosition(positionState)
  }, [positionState])

  return (
    <div>
      <p>Direction Information:
        Top {'=>'} North, Bottom {'=>'} South, Right {'=>'} East, Left {'=>'} West
      </p>
      <p className="mb-4" data-testid="positionDesc">Position: ({robotPosition.x}, {robotPosition.y})</p>
    </div>
  )
}
