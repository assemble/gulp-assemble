# Heads up!

This project has been deprecated. [Assemble](https://github.com/assemble/assemble) can be used directly with or without gulp.

## Examples

**Assemble with gulp**

```js
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var extname = require('gulp-extname');
var assemble = require('assemble');
var app = assemble();

gulp.task('load', function(cb) {
  app.partials('templates/partials/*.hbs');
  app.layouts('templates/layouts/*.hbs');
  app.pages('templates/pages/*.hbs');
  cb();
});

gulp.task('assemble', ['load'], function() {
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(htmlmin())
    .pipe(extname())
    .pipe(app.dest('site'));
});

gulp.task('default', ['assemble']);
```

**Assemble without gulp**

```js
var htmlmin = require('gulp-htmlmin');
var extname = require('gulp-extname');
var assemble = require('assemble');
var app = assemble();

app.task('load', function(cb) {
  app.partials('templates/partials/*.hbs');
  app.layouts('templates/layouts/*.hbs');
  app.pages('templates/pages/*.hbs');
  cb();
});

app.task('assemble', ['load'], function() {
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(htmlmin())
    .pipe(extname())
    .pipe(app.dest('site'));
});

app.task('default', ['assemble']);
```