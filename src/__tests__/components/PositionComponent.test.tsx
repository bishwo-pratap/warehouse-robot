import React from 'react';
import { render } from '@testing-library/react';
import PositionComponent from '@/components/PositionComponent';
import { InitialRobotPosition } from '@/constants';

describe('Testing Position Component', () => {
  it('renders the position information correctly', () => {
    const { getByText } = render(<PositionComponent />);
    // Check that the position information is rendered correctly
    expect(getByText(`Position: (${InitialRobotPosition.x}, ${InitialRobotPosition.y})`)).toBeInTheDocument();
  })
});
