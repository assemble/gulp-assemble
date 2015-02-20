# gulp-assemble[![NPM version](https://badge.fury.io/js/gulp-assemble.svg)](http://badge.fury.io/js/gulp-assemble) [![Build Status](https://travis-ci.org/assemble/gulp-assemble.svg)](https://travis-ci.org/assemble/gulp-assemble) 

> Gulp plugin for Assemble.

## WARNING!!!

Since gulp-assemble is using the [v0.6.0-alpha branch of Assemble](https://github.com/assemble/assemble/tree/v0.6.0), this is not ready to be used unless you're willing to deal with daily changes, broken code, and lack of documentation.

## Install

Install with [npm](npmjs.org)

```bash
npm i assemble/gulp-assemble
```

## Usage

Example **gulpfile.js** with gulp-assemble and [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin):

```javascript
var gulp = require('gulp');
var assemble = require('assemble');
var htmlmin = require('gulp-htmlmin');
var extname = require('gulp-extname');
var gulpAssemble = require('gulp-assemble');

gulp.task('assemble', function () {
  gulp.src('pages/*.hbs')
    .pipe(gulpAssemble(assemble))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(extname())
    .pipe(gulp.dest('_gh_pages/'));
});

gulp.task('default', ['assemble']);
```

## Author

**Brian Woodward**
 
+ [github/assemble](https://github.com/assemble)
+ [twitter/assemble](http://twitter.com/assemble) 

## License
Copyright (c) 2015 Brian Woodward  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on February 19, 2015._
