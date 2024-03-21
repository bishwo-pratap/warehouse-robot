import React from 'react';
import { Sidebar } from 'flowbite-react';
import useRobotStore from "@/store/RobotStore"

export default function ButtonComponent() {
  const handleActions = useRobotStore((state) => state.handleActions)
  const btnClass = 'rounded-full flex items-center justify-center space-x-2 py-2 px-4 rounded mr-2 bg-gray-400 text-white hover:bg-gray-500 m-2';
  return (
    <Sidebar aria-label="actions-sidebar" className='h-100 w-30'>
      <div className="my-4">
        <div className="mr-4">
          <div className="flex flex-col items-center justify-between ">
            <h3 className="text-xl font-bold mb-1">Movements:</h3>
            <button data-testid="moveUp" className={btnClass} onClick={() => handleActions('N')}>Move Up</button>
            <div className="flex ">
              <button data-testid="moveLeft" className={btnClass} onClick={() => handleActions('W')}>Move Left</button>
              <button data-testid="moveRight" className={btnClass} onClick={() => handleActions('E')}>Move Right</button>
            </div>
            <button data-testid="moveDown" className={btnClass} onClick={() => handleActions('S')}>Move Down</button>
          </div>
        </div>
      </div>
    </Sidebar>
  )
}
