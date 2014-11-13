var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var assemble = require('./');

var options = {
  layout: 'default',
  data: ['site.yml', 'test/fixtures/data/*.{json,yml}'],
  layouts: ['test/fixtures/layouts/*.hbs'],
  partials: ['test/fixtures/includes/*.hbs']
};

// add some middleware to run when the files are loaded
var middleware = require('./examples/middleware/example');
assemble.instance.onLoad(/\.*/, middleware(assemble));

// build some sample pages based on the templates in test/fixtures
gulp.task('assemble', function () {
  gulp.src('test/fixtures/pages/*.hbs')
    .pipe(assemble(options))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_gh_pages/'));
});

// default task
gulp.task('default', ['assemble']);