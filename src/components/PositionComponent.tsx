import React from 'react';
import { InitialRobotPosition } from "@/constants"
import useRobotStore from "@/store/RobotStore"
import { Position } from "@/types/position"
import { useEffect, useState } from "react"
import { Banner } from 'flowbite-react';
import { MdAnnouncement } from 'react-icons/md';
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
    <Banner>
      <div className="flex  w-full border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex flex-col">
          <p className="flex text-sm font-normal text-gray-500 dark:text-gray-400">
            <MdAnnouncement className="mr-4 h-4 w-4" />
            <span>
              Direction Information: Top {'=>'} North, Bottom {'=>'} South, Right {'=>'} East, Left {'=>'} West
            </span>
          </p>
          <p className="my-1 font-normal text-gray-500 dark:text-gray-400" data-testid="positionDesc">Position: ({robotPosition.x}, {robotPosition.y})</p>
        </div>
      </div>
    </Banner>
  )
}
