# Posts App

## Project setup instructions

1. Clone the repo
2. Create `.env.local` config with api reference
    ```
    REACT_APP_API=https://jsonplaceholder.typicode.com/
    ```
3. Install dependencies using `npm install`
4. Install husky hooks `npm run prepare`
5. Run the app using `npm run start`

## Implementation Details and Restrictions
From the start I decided to use `redux-toolkit` library to explore more features from it, as it was very interesting to try some other tools different from `createSlice` and selectors I used before. It adds extra difficulty and, unfortunately, I was not able to fully implement all the required features before the deadline at 9th June. On other hand, I added demo of usage different redux toolkit features.

### Restrictions & Assumptions
For the sake of demo, it was assumed that api will always return no more than 9 posts and 3 comments.
For redux integration, it was assumed that the app consists of 3 different parts: posts, comments and post filter.

### Project structure
* `api` - api layer implemented using `createApi` redux toolkit feature.
* `components` - contains common components sorted by specific domains. As form inputs and layout elements.
* `constants` - contains common constants sorted by specific domains
* `hooks` - contains general purpose hooks.
* `store` - app redux store implemented using such redux toolkit features as `createSlice`, `entityAdapter`, `createSelector`, `createAsyncThunk`. Store organized in specific domain slices.
* `types` - contains common types sorted by specific domains.
* `views` - contains component integrations responsible for displaying data from api and implementing business logic.
* `./config.ts` - env configuration layer

### Extra setup
Aside of requirements, were added:
* eslint checker
* prettier setup
* husky pre-commit automatization, responsible for checking and fixing formatting, syntax, code style issues.
* added typescript path aliases

### Known issues:
* no tests
* no ErrorBoundary
* color and magic variable hardcode in styled components
* autocomplete component warning

### Not implemented features progress:
* comment reply. You can look at the WIP on that in dedicated [branch](https://github.com/forest-shadow/bb-test/tree/add-comment-replies). That functionality is working, but quite buggy and I decided to not merge it in the `main`.

### P.S.>
Overall, I think my decision to use redux toolkit was overkill here, since I spent too much time on it instead of polishing all the required features and the app structure. But what is done is done.

----
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
