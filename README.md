# VanillaJSDemo

## Synopsis

A simple pure Javascript solution to basic component reuse, routing, sass, ES6 and the build tool, `Gulp`.

## Motivation

This project was first inspired by a company asking me to write this in vanilla js as a test for employment.  I took it as an opportunity to see what could be done with pure JS in this world of multiple JS frameworks.
Hopefully, this would help beginners gain an easier understanding of all this mess

## Branches

`master` - Simple code that you load into your browser by opening the index.html file.

`feature/es6` - The introduction of automatic build tools so that you can code in ES2016 (ES6), SASS and have live reload of your browser just by saving a file change in your editor. 
Here we use `gulp`, `babel`, `browserify` and `browsersync`.
It even has es6 linting to keep you to your chosen coding standards.

`feature/webpack` - Same features as the `feature/es6` branch execpt instead using `Webpack`.

## Installation

```
$ git clone https://github.com/dreadrocksean/VanillaJSDemo.git
$ git checkout feature/ES6
$ git rm -rf node_modules (optional and still the cleanest way to prune)
$ npm i
$ gulp
```

For pure ES5 Javascript and CSS with no bells and whistles omit
```
$ git checkout feature/ES6
```
Or if you have already executed it, do
```
$ git checkout master
```
. . . then just reload the browser.


## Contributors

Adrian Bartholomew
