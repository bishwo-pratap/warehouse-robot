import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";
import useRobotStore from "@/store/RobotStore";

describe('Testing Robot Store', () => {
  it('should handle the N command and update the robot\'s position correctly', () => {
    const { result } = renderHook(() => useRobotStore());
    const { current: { handleActions } } = result;

    act(() => handleActions('N'))
    expect(result.current.robotPosition).toEqual({ x: 0, y: 8 })
  })
  it('should handle the E command and update the robot\'s position correctly', () => {
    const { result } = renderHook(() => useRobotStore());
    const { current: { handleActions } } = result;

    act(() => handleActions('E'))
    expect(result.current.robotPosition).toEqual({ x: 1, y: 8 })
  })
  it('should handle the W command and update the robot\'s position correctly', () => {
    const { result } = renderHook(() => useRobotStore());
    const { current: { handleActions } } = result;

    act(() => handleActions('W'))
    expect(result.current.robotPosition).toEqual({ x: 0, y: 8 })
  })
  it('should handle the S command and update the robot\'s position correctly', () => {
    const { result } = renderHook(() => useRobotStore());
    const { current: { handleActions } } = result;

    act(() => handleActions('S'))
    expect(result.current.robotPosition).toEqual({ x: 0, y: 9 })
  })
})
