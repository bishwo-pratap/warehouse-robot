import React from 'react';
import { render } from '@testing-library/react';
import useRobotStore from '@/store/RobotStore';
import WarehouseComponent from '@/components/WarehouseComponent';
import { InitialRobotPosition } from '@/constants';

jest.mock('@/store/RobotStore');

describe('Testing Warehouse Component', () => {
  it('renders a 10 x 10 grid layout', () => {
    (useRobotStore as any).mockReturnValue({
      robotPosition: InitialRobotPosition,
    });
    const { getAllByTestId } = render(<WarehouseComponent />);

    const gridCells = getAllByTestId('grid-cell');
    expect(gridCells).toHaveLength(100); // 10 x 10 = 100 grids
  })
  it('renders the grid layout correctly with the robot', () => {

    jest.spyOn(require('@/store/RobotStore'), 'default').mockReturnValue(InitialRobotPosition);

    const { getByTestId } = render(<WarehouseComponent />);

    const robotImage = getByTestId('robot');
    expect(robotImage).toBeInTheDocument();
    expect(robotImage.parentElement).toHaveAttribute(
      'data-testid', `robot-${InitialRobotPosition.x}-${InitialRobotPosition.y}`
    )
  });
});
