# Code challange

This is a Simple Survey app build with

- ReactJS
- Material UI and other usefull libs.

You can see this app running by cloning the repo and opening `/dist/index.html` in your web browser.
A small HTML file that imports the React app static JS to render the survey.

## Survey App

- `yarn` to install dependencies
- `yarn start` to run development server
- `yarn build` to generate a production version. The JS and CSS files are generated with the same name to prevent breaking other pages including the survey and get allway the most recent changes.
- `yarn test` to run the unit tests.

### Folder structure

- `/components` Components that render the UI. They contains a small fragment of code, usual, the style rules and can be reused.
- `/hooks` Files with some hooks used along the project.
- `/models` Main classes and enumerators.
- `/provider` Providers files giving context to use in the application.
- `/services` Reducer and Storage services, responsables for initial state and actions to handle and store the state.

### Data Store Service

The survey use the web browser localStorage API to persist and retrieve the survey data.
