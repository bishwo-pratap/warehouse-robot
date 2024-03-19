import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonComponent from '@/components/ButtonComponent';
import useRobotStore from '@/store/RobotStore';

describe('Testing Button Component', () => {
  let handleActionsMock: jest.Mock;
  beforeEach(() => {
    handleActionsMock = jest.fn();
    jest.spyOn(useRobotStore.getState(), 'handleActions').mockImplementation(handleActionsMock);
  })

  test('it should have a header present', () => {
    const { getByText } = render(<ButtonComponent />);
    expect(getByText('Movements:')).toBeInTheDocument();
  })

  test('it should have Move Up present and callable', () => {
    const { getByTestId } = render(<ButtonComponent />);
    const moveUpBtn = getByTestId('moveUp')

    // validating button presence
    expect(moveUpBtn).toBeInTheDocument();
    // validating button's clickability
    fireEvent.click(moveUpBtn);
    expect(handleActionsMock).toHaveBeenCalledTimes(1)
  })
  test('it should have Move Left present and callable', () => {
    const { getByTestId } = render(<ButtonComponent />);
    const moveLeftBtn = getByTestId('moveLeft')

    // validating button presence
    expect(moveLeftBtn).toBeInTheDocument();
    // validating button's clickability
    fireEvent.click(moveLeftBtn);
    expect(handleActionsMock).toHaveBeenCalledTimes(1)
  })
  test('it should have Move Right present and callable', () => {
    const { getByTestId } = render(<ButtonComponent />);
    const moveRightBtn = getByTestId('moveRight')

    // validating button presence
    expect(moveRightBtn).toBeInTheDocument();
    // validating button's clickability
    fireEvent.click(moveRightBtn);
    expect(handleActionsMock).toHaveBeenCalledTimes(1)
  })
  test('it should have Move Down present and callable', () => {
    const { getByTestId } = render(<ButtonComponent />);
    const moveDownBtn = getByTestId('moveDown')

    // validating button presence
    expect(moveDownBtn).toBeInTheDocument();
    // validating button's clickability
    fireEvent.click(moveDownBtn);
    expect(handleActionsMock).toHaveBeenCalledTimes(1)
  })

})
