var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var extname = require('gulp-extname');
var assemble = require('assemble');
var middleware = require('./examples/middleware');
var gulpAssemble = require('./');

// setup items on the assemble object
assemble.data({site: {title: 'Blog'}});
assemble.data(['test/fixtures/data/*.{json,yml}']);
assemble.layouts(['test/fixtures/layouts/*.hbs']);
assemble.partials(['test/fixtures/includes/*.hbs']);

// arbitrary middleware that runs when files loaded
assemble.onLoad(/index\.hbs/, middleware(assemble));

// render templates in `test/fixtures`
gulp.task('default', function () {
  gulp.src('test/fixtures/pages/*.hbs')
    .pipe(gulpAssemble(assemble, { layout: 'default' }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(extname())
    .pipe(gulp.dest('_gh_pages/'));
});
