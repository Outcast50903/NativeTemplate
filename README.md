# Project Name

This project is an React Native template

## Installation

Run this command line to install the project:

```bash

sudo npx react-native init <App-Name> --template https://github.com/Outcast50903/NativeTemplate.git

```
## Getting Started

## Step 1: Install dependencies

First, you will need to install the project dependencies, for this run this command:

```bash

yarn

```

## Step 2: Configure environment variables

Add environment variables:  

```env

API_URL=

API_KEY=

```

For more information about the `API key` you will visit this URL [Link](https://api.cmfchile.cl/api_cmf/contactanos.jsp)

## Step 3: Install pods dependencies

For `IOS` you need install the pods dependencies, for this run this command:

```bash

yarn pods

```  

## Step 4: Start the Metro Server

To start Metro, run the following command:  

```bash

yarn start

```

## Step 5: Start your Application

Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash

yarn android

```

### For iOS

```bash

yarn ios

```

# Tests

## Jest

Run the unit tests:

```sh
yarn test
```

Run the unit tests in watch mode:

```sh
yarn test:watch
```

## E2E Tests

[Install macOS prerequisites](https://wix.github.io/Detox/docs/introduction/getting-started/#2-macos-only-applesimutils):

```sh
brew tap wix/brew
brew install applesimutils
```

[Build the app](https://wix.github.io/Detox/docs/introduction/project-setup#step-5-build-the-app):

```sh
yarn build:e2e
```

[Run the E2E tests](https://wix.github.io/Detox/docs/introduction/your-first-test#running-tests):

```sh
yarn test:e2e
```

Run the E2E tests in watch mode:

```sh
yarn test:e2e:watch
```

## Congratulations! :tada: