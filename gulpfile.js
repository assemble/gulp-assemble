var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var extname = require('gulp-extname');
var assemble = require('assemble');
var gulpAssemble = require('./');

// setup items on the assemble object
assemble.data(['site.yml', 'test/fixtures/data/*.{json,yml}']);
assemble.layouts(['test/fixtures/layouts/*.hbs']);
assemble.partials(['test/fixtures/includes/*.hbs']);

// add some middleware to run when the files are loaded
var middleware = require('./examples/middleware/example');
assemble.onLoad(/\.*/, middleware(assemble));

// build some sample pages based on the templates in test/fixtures
gulp.task('assemble', function () {
  gulp.src('test/fixtures/pages/*.hbs')
    .pipe(gulpAssemble(assemble, { layout: 'default' }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(extname())
    .pipe(gulp.dest('_gh_pages/'));
});

// default task
gulp.task('default', ['assemble']);
