# warehouse-robot

This is a technical assessment for Lyka. This project (in part 1) shows a layout with robot that is supposed to move only within a boundary.

Later: Should render the cargo crates and add pickup and drop mechanism.

`Please read carefully for proper set up.`

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
npx i -g playwright@latest
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

#### 4. Executing end-to-end tests with webServer config
```
npx playwright test --ui
```

#### 5. Starting the server for the demo
```
npm run dev
```
