# es6-npm-boilerplate

This forms the baseline architecture for building an NPM package that might include code written using ES2015 (ES6) syntax. When publishing your module, your code will automatically be transpiled by Babel so that it can be consumed by the end user in their application.

## Pre-requisites
Ensure that you have signed-up for an [NPM account](https://www.npmjs.com/).

## Instructions

 1. Download the source code and use it as a starting point. 
 2. Create a folder called 'dist'. This folder will contain your resulting code, once Babel has transpiled it. Code within this directory is used by applications that have installed your NPM package using the ```npm install``` command.

## Information
Below are descriptions of each of the files included in this repository and their function.

**src** : The folder in which you place your code.

**.babelrc** : When you publish your NPM package Babel will detect this file and use the instructions within it to perform specific tasks. In our case, this file only contains one 'preset'. This preset instructs Babel that your files could contain code written in ES2015 (ES6) syntax and that Babel should transpile it into ES5 code.

**.gitignore** : Contains a list of files/folders that GIT should ignore when pushing your codebase to your GIT repository.

**.npmignore** : Contains a list of files/folders that NPM should NOT publish to your NPM repository.

**package.json** : Contains meta data about your NPM package.

## Publishing your package to NPM:
Publishing your NPM package is as easy as running this command:

    npm publish

This will push your NPM package to your account and will be available to be included in other applications using the command:

    npm install [YOUR_PACKAGE_NAME]
