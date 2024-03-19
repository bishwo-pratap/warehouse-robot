# warehouse-robot

This is a technical assessment for Lyka. This project (in part 1) shows a layout with robot that is supposed to move only within a boundary.

`Later (Part 2):` Should render the cargo crates and add pickup and drop mechanism.

`Please read carefully for proper set up.`

## Tech Stack
- [NextJS](https://nextjs.org/): React Based Framework
- [Zustand](https://www.npmjs.com/package/zustand): State Management Library
- [TailwindCSS](https://www.npmjs.com/package/tailwindcss): Styling Library
- [Jest](https://www.npmjs.com/package/jest): Testing library
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react): Library for testing components for React app
- [Playwright](https://www.npmjs.com/package/playwright): End-to-end UI testing library

### Prerequisites

#### 1. node.js

```
node version >=19
```

#### Install NVM for node version management
- [Linux installation](https://monovm.com/blog/install-nvm-on-ubuntu/)  
- [macOS installation](https://collabnix.com/how-to-install-and-configure-nvm-on-mac-os/)

#### Get and use required node version
```
nvm install 19
nvm use 19
```
#### 2. Playwright
```
npx playwright install
```

### Project Setup

#### 1. Cloning the project
```
git clone https://github.com/bishwo-pratap/warehouse-robot.git
```

#### 2. Installing the packages
```
cd warehouse-robot && npm i
```

#### 3. Executing unit tests
```
npm run test
```
![ss-jest](https://github.com/bishwo-pratap/warehouse-robot/assets/19890839/6b5ad031-8eeb-4876-8655-7afd0cee874c)


#### 4. Executing end-to-end tests with webServer config
```
npx playwright test --ui
```
![ss-playwright](https://github.com/bishwo-pratap/warehouse-robot/assets/19890839/c3fcbf9d-5c5d-4d9f-9654-1064b77889db)

#### 5. Starting the server for the demo
```
npm run dev
```
![warehouse](https://github.com/bishwo-pratap/warehouse-robot/assets/19890839/828d844c-ffa4-4e82-aaaf-49372c96f6c9)
