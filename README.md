# Getting Started with Lazy Hamburger

This is a lazy loading hamburger menu and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is using React v18 and Typescript.

## Running the App

In the command prompt or terminal clone the app

#### `git clone https://github.com/cherry15/lazy-hamburger.git`

CD into the folder

#### `cd lazy-hamburger`

And install dependencies

#### `npm i`

If you get errors running the unit tests you will need to update the versions of react testing library

#### `npm install --save-dev @testing-library/react@latest`

#### `npm install --save-dev @testing-library/jest-dom@latest`

#### `npm install --save-dev @testing-library/user-event@latest`

Thanks to [Stackoverflow](https://stackoverflow.com/questions/71685441/react-testing-library-gives-console-error-for-reactdom-render-in-react-18)

If you get errors running the app you will need to update the versions of react types.

Have a look in package.json and if you see types for react or react-dom lower than version 18 then you'll need to update them, for example

"@types/react": "^17.0.1",

"@types/react-dom": "^17.0.0",
...

#### `npm install --save @types/react@latest`

#### `npm install --save @types/react-dom@latest`

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

