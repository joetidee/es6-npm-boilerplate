# es6-npm-bootstrap

This forms the baseline architecture of an npm package that will allow you to include code written using ES6 syntax. When publishing this module, your code will automatically be transpiled by Babel so that it can be consumed by the end user in their application.

## Pre-requisites
Ensure that you have signed-up for an [NPM account](https://www.npmjs.com/).
Create a folder in the root of your application called 'dist'. This folder will contain the code once Babel has transpiled it. Code within this directory is used by applications that have installed your package using the ```npm install``` command.

## Instructions
Download the source code and use it as a starting point. 

## Information
Below are descriptions of each of the files included in this repository and their function.

**src**
This is the folder in which you place your application code.

**.babelrc**
When you publish your npm package, Babel will detect this file and use the instructions within it to perform specific tasks. In our case, this file only contains one 'preset'. This preset instructs Babel that we will be using ES2015 (ES6) syntax in our code and that Babel should transpile it into ES5 code.

**.gitignore**
Contains a list of files/folders that GIT should ignore when pushing this codebase to your GIT repository.

**.npmignore**
Contains a list of files/folders that NPM should NOT publish to your NPM repository.

**package.json**
Contains meta data about your application or module

## Publishing your package to NPM:
Publishing your npm package is as easy as running this command:

    npm publish

