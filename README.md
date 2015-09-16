# gulp-blueprint-babel
[![npm](https://img.shields.io/npm/v/gulp-blueprint-babel.svg?style=flat-square)](https://www.npmjs.com/package/gulp-blueprint-babel)
[![Travis](https://img.shields.io/travis/marc1404/gulp-blueprint-babel.svg?style=flat-square)](https://travis-ci.org/marc1404/gulp-blueprint-babel)
[![Code Climate](https://img.shields.io/codeclimate/github/marc1404/gulp-blueprint-babel.svg?style=flat-square)](https://codeclimate.com/github/marc1404/gulp-blueprint-babel)
[![Code Climate](https://img.shields.io/codeclimate/coverage/github/marc1404/gulp-blueprint-babel.svg?style=flat-square)](https://codeclimate.com/github/marc1404/gulp-blueprint-babel/coverage)
[![npm](https://img.shields.io/npm/l/gulp-blueprint-babel.svg?style=flat-square)](https://github.com/marc1404/gulp-blueprint-babel/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/gulp-blueprint-babel.svg?style=flat-square)](https://www.npmjs.com/package/gulp-blueprint-babel)

[![David](https://img.shields.io/david/marc1404/gulp-blueprint-babel.svg?style=flat-square)](https://github.com/marc1404/gulp-blueprint-babel/blob/master/package.json)
[![David](https://img.shields.io/david/dev/marc1404/gulp-blueprint-babel.svg?style=flat-square)](https://github.com/marc1404/gulp-blueprint-babel/blob/master/package.json)

## Installation
```
$ npm install --save-dev gulp-blueprint-babel
```
  
## Description
This package can be used to setup a [Gulp](https://www.npmjs.com/package/gulp) task to compile, annotate and minify ES6 to ES5 using [Browserify](http://browserify.org/) and [Babel](https://babeljs.io/).

Using:
- [browserify](https://www.npmjs.com/package/browserify)
- [babelify](https://www.npmjs.com/package/babelify)
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [gulp-ng-annotate](https://www.npmjs.com/package/gulp-ng-annotate)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)

## Usage
*gulpfile.js*
```javascript
var babel = require('gulp-blueprint-babel');

babel(); // gulp task registered with default options
```
  
## Options
You can pass an options object.
- ```task``` (*string*, default: ```'js'```): The gulp task name
- ```dependencies``` (*string|array*, default: ```['clean']```): The gulp task dependencies
- ```input``` (*string|array*, default: ```'app.js'```): JS input file
- ```browserify``` (*object*, default: ```{ debug: true, baseDir: 'app/client' }```): Options for [browserify](https://www.npmjs.com/package/browserify)
- ```output``` (*string*, default: ```'app.min.js'```): Output file name
- ```dest``` (*string*, default: ```'public'```): Destination of the compiled, annotated and minified JavaScript bundle

## Test
```
$ npm install -g mocha  
$ mocha
```

## Author
[marc1404](https://github.com/marc1404)

## License
[MIT](https://github.com/marc1404/gulp-blueprint-babel/blob/master/LICENSE)