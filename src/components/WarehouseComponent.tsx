import React from 'react';
import Image from "next/image"
import { useEffect, useState } from "react"
import { Position } from "@/types/position"
import useRobotStore from "@/store/RobotStore"
import { InitialRobotPosition } from "@/constants"
import { RobotState } from '@/types/robotStore';
/**
 * 
 * @returns a 10 x 10 grid layout with a robot
 */
export default function WarehouseComponent() {
  const [robotPosition, setRobotPosition] = useState<Position>(InitialRobotPosition)
  const positionState = useRobotStore<Position>((state: RobotState) => state.robotPosition)
  const ROWS = Array.from({ length: 10 });
  const COLUMNS = Array.from({ length: 10 });

  useEffect(() => {
    setRobotPosition(positionState)
  }, [positionState])

  return (
    <div className="grid mt-2">
      {ROWS.map((_, rowIndex) => (
        <div className="row flex m-0" key={rowIndex}>
          {COLUMNS.map((_, colIndex) => {
            return (
              <div
                data-testid="grid-cell"
                className={`flex flex-col cell w-14 h-14 border border-gray-300 items-center justify-between bg-blue-100`}
                key={colIndex}
              >
                {colIndex === robotPosition.x && rowIndex === robotPosition.y
                  ? <div className="robotImage" data-testid={`robot-${colIndex}-${rowIndex}`}>
                  <Image
                    data-testid='robot'
                    src={'/robot.png'}
                    alt="robot"
                    width='32'
                    height='32'
                  />
                </div>
                  : ''
                }
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
