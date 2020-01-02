# ReactJS Template

This is a template to speed up starting projects using React.

The reason for this is this template includes the following:

* Unit tests from component to actions to reducers.
* Allows for backend endpoint connection.
* Code written using clean code principles.

1. **One command to get started** - Type `npm start` to start development in your default browser.
2. **Rapid feedback** - Each time you hit save, changes hot reload and linting and automated tests run.
3. **Up to date technology** - This uses [the most popular and powerful libraries](#technologies) for working with React.
4. **Working example app** - The included example app shows how this all works together.
5. **Automated production build** - Type `npm run build` to do all this:

### What does the template offer
* Contains the ability to login by hitting an endpoint
* Grab data from an endpoint
* Store the data in a reducer store
* Use the data in the view.
* Prebuilt components for easy development
* Notification System
* Authentication Management
* A standardized design with an optional dark mode
* A demo application to demonstrate how react works
* Navigation system between different views
* Tabular page splitting
* An easy way to learn React Hooks
* Unit testing examples for components, actions and reducers with code coverage reports.
* Material UI Design components for easy app building.
* Compatible with [useHooks](https://usehooks.com/) for handy open source hooks
* Hot reloading for quick development
* Follows AirBnB coding standards for React/JSX


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

A step by step guide to get the application running:

Install required npm packages:

```
npm install
```

## Running Server
This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

```
npm start -s
```

## Running the tests & Code Coverage Reporting

[Jest](https://jestjs.io/) framework used for unit testing combined with [Enzyme](https://www.npmjs.com/package/enzyme).

To run unit tests:

```
npm run test
```
Runs tests (files ending in .spec.js or .test.js) using Jest and outputs results to the command line.


To run unit tests and generate a code coverage report:

```
npm run test:cover
```
Runs tests (files ending in .spec.js or .test.js) using Jest and outputs results to the command line.
It will also write a code coverage report onto the command line and write a report to
```
/coverage/lcov-report/index.html
```

## Deployment

This can be deployed on any system locally, on a server or in the cloud with ease. To build a production
version of the webapp use the following command
```
npm run build
```

* Minifies all JS
* Sets NODE_ENV to prod so that React is built in production mode
* Places the resulting built project files into /dist. (This is the folder you'll expose to the world).

If the app destination is different from the server root (`/`) you need to reconfigure `output.publicPath` in `webpack.config.prod.js` before building the app. See [webpack docs](https://webpack.js.org/configuration/output/#output-publicpath) for more information.
## Folder Structure

```bash
.
├── .editorconfig             # Configures editor rules
├── .gitignore                # Tells git which files to ignore
├── .istanbul.yml             # Configure istanbul code coverage
├── .npmrc                    # Configures npm to save exact by default
├── README.md                 # This file.
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── src                       # Source code
│   ├── actions               # Flux/Redux actions. List of distinct actions that can occur in the app.
│   ├── components            # React components
│      ├── containers         # Top-level React components that interact with Redux
│   ├── constants             # Application constants including constants for Redux
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev. Not actually used in prod build.
│   ├── index.ejs             # Template for homepage
│   ├── index.js              # Entry point for your app
│   ├── reducers              # Redux reducers. Your state is altered here based on actions
│   ├── store                 # Redux store configuration
│   ├── styles                # CSS Styles, typically written in Sass
│   └── utils                 # Plain old JS objects (POJOs). Pure logic. No framework specific code here.
├── tools                     # Node scripts that run build related tools
│   └── analyzeBundle.js      # Analyzes the webpack bundle
│   ├── assetsTransformer.js  # Fix for jest handling static assets like imported images
│   ├── setup                 # Scripts for setting up a new project using React Slingshot
│   │   ├── setup.js          # Configure project set up
│   │   ├── setupMessage.js   # Display message when beginning set up
│   │   └── setupPrompts.js   # Configure prompts for set up
│   ├── build.js              # Runs the production build
│   ├── chalkConfig.js        # Centralized configuration for chalk (adds color to console statements)
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── nodeVersionCheck.js   # Confirm supported Node version is installed
│   ├── removeDemo.js         # Remove demo app
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
│   ├── startMessage.js       # Display message when development build starts
├── webpack.config.dev.js     # Configures webpack for development builds
└── webpack.config.prod.js    # Configures webpack for production builds
```

## Why are test files placed alongside the file under test (instead of centralized)?

Streamlined automated testing is a core feature of this starter kit. All tests are placed in files that end in .spec.js. Spec files are placed in the same directory as the file under test. Why?

* The existence of tests is highly visible. If a corresponding .spec file hasn't been created, it's obvious.
* Easy to open since they're in the same folder as the file being tested.
* Easy to create new test files when creating new source files.
* Short import paths are easy to type and less brittle.
* As files are moved, it's easy to move tests alongside.

That said, you can of course place your tests under **test** instead. Then Jest will simply look in /test to find your spec files.


## How do I handle images?

Via [Webpack's file loader](https://github.com/webpack/file-loader). Example:

```html
<img src={require('./src/images/myImage.jpg')} />
```

Webpack will then intelligently handle your image for you. For the production build, it will copy the physical file to /dist, give it a unique filename, and insert the appropriate path in your image tag.

## Technologies
| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux), [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux), [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)|
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](https://webpack.js.org) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
| [TrackJS](https://trackjs.com/) | JavaScript error tracking. | [Free trial](https://my.trackjs.com/signup)|  
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |

## Authors

* **Dean Nelson**

## Acknowledgments

* Hat tip to anyone whose code was used.
