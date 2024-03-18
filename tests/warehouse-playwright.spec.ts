import { InitialRobotPosition } from '@/constants';
import { Position } from '@/types/position';
import { ActionCommands } from '@/types/robotActions';
import { test, expect } from '@playwright/test';

let tempPositions = { ...InitialRobotPosition };

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe('Warehouse Page Tests', () => {
  test('page has appropriate heading', async ({ page }) => {
    await expect(page).toHaveTitle(/Warehouse Robot/);
  });

  test('page has appropriate position description', async ({ page }) => {
    const positionDesc = page.getByTestId('positionDesc');
    // have correct position coordinates
    await expect(positionDesc).toHaveText(`Position: (${InitialRobotPosition.x}, ${InitialRobotPosition.y})`)
  });

  test('page has Movement section with Movement Buttons', async ({ page }) => {
    const positionDesc = page.getByTestId('positionDesc');
    // check to have the div with Movements: text
    await expect(page.getByText(/Movements:/)).toBeVisible()
    
    // ------- Move Up Button -------
    const moveUpBtn = page.getByText('Move Up');
    // check to have the moveUp button be visible and clickable
    await expect(moveUpBtn).toBeVisible()
    await moveUpBtn.click()
    // check to if the position is updated correctly
    tempPositions = getNewPosition('N', tempPositions);
    await expect(positionDesc).toHaveText(`Position: (${tempPositions.x}, ${tempPositions.y})`)

    // ------- Move Right Button -------
    const moveRightBtn = page.getByText('Move Right');
    // check to have the moveRight button be visible and clickable
    await expect(moveRightBtn).toBeVisible()
    await moveRightBtn.click()
    // check to if the position is updated correctly
    tempPositions = getNewPosition('E', tempPositions);
    await expect(positionDesc).toHaveText(`Position: (${tempPositions.x}, ${tempPositions.y})`)

    // ------- Move Down Button -------
    const moveDownBtn = page.getByText('Move Down');
    // check to have the moveDown button be visible and clickable
    await expect(moveDownBtn).toBeVisible()
    await moveDownBtn.click()
    // check to if the position is updated correctly
    tempPositions = getNewPosition('S', tempPositions);
    await expect(positionDesc).toHaveText(`Position: (${tempPositions.x}, ${tempPositions.y})`)

    // ------- Move Left Button -------
    const moveLeftBtn = page.getByText('Move Left');
    // check to have the moveLeft button be visible and clickable
    await expect(moveLeftBtn).toBeVisible()
    await moveLeftBtn.click()
    // check to if the position is updated correctly
    tempPositions = getNewPosition('W', tempPositions);
    await expect(positionDesc).toHaveText(`Position: (${tempPositions.x}, ${tempPositions.y})`)
  });

  test('Robot cannot go out of boundry', async ({ page }) => {
    const positionDesc = page.getByTestId('positionDesc');
    
    // ------- Move Down Button -------
    const moveDownBtn = page.getByText('Move Down');
    // check to have the moveDown button be visible and clickable
    await expect(moveDownBtn).toBeVisible()
    await moveDownBtn.click()
    // check to if the position is unchanged
    await expect(positionDesc).toHaveText(`Position: (${InitialRobotPosition.x}, ${InitialRobotPosition.y})`)

    // ------- Move Left Button -------
    const moveLeftBtn = page.getByText('Move Left');
    // check to have the moveLeft button be visible and clickable
    await expect(moveLeftBtn).toBeVisible()
    await moveLeftBtn.click()
    // check to if the position is unchanged
    await expect(positionDesc).toHaveText(`Position: (${InitialRobotPosition.x}, ${InitialRobotPosition.y})`)
  });
})

/**
 * 
 * @param cmd string E | W | N | S
 * @param position of type Position (x,y)
 * @returns new Position (x,y)
 */
const getNewPosition = ( cmd: ActionCommands, position: Position ) : Position => {
  let newPosition = { ... position };
  switch (cmd) {
    case 'N':
      return { ...newPosition, y: newPosition.y - 1 }
    case 'S':
      return { ...newPosition, y: newPosition.y + 1 }
    case 'E':
      return { ...newPosition, x: newPosition.x + 1 }
    case 'W':
      return { ...newPosition, x: newPosition.x - 1 }
    default:
      return newPosition
  }
}


