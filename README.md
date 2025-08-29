# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Fruits: Endgame
 ### Overview
  Fruits: Endgame is a word-guessing game built with React. The goal is to guess a hidden word, letter by letter, before you run out of        attempts. Each incorrect guess eliminates a programming language from the "languages" list. If you lose all but one language, you lose the   game and are humorously told to "start learning Assembly!"

  #### How to Play
- A random word is selected at the start of each game **(randomly generated)**.
- Use the on-screen keyboard to guess letters.
- Each correct guess reveals the letter in the word.
- Each incorrect guess eliminates a programming language **(displayed as colored chips)**.
- You have as many attempts as there are programming languages minus one **(means all the languages can be eliminated expect one)**.
- If you guess all letters before running out of attempts, **You win!**
- If you use up all your attempts, **you lose** and **Assembly** is the only language left.

#### Features
- `Colorful Language Chips:` Each programming language is represented by a colored chip. Incorrect guesses "eliminate" a language.
- `On-Screen Keyboard:` Click letters to make guesses. Used letters are color-coded for correctness.
- `Confetti Animation:` Celebrate your win with confetti!
- `Dynamic Farewell Messages:` Each eliminated language gets a random farewell message.
- `Responsive UI:` The game is playable on desktop and mobile browsers.

#### Technologies Used
- **`React`**
- **`CSS`**
- **`clsx for conditional class names`**
- **`react-confetti for win animation`**

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
