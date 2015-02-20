var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var assemble = require('assemble');
var gulpAssemble = require('./');

var options = {
  layout: 'default',
  data: ['site.yml', 'test/fixtures/data/*.{json,yml}'],
  layouts: ['test/fixtures/layouts/*.hbs'],
  partials: ['test/fixtures/includes/*.hbs']
};

// setup items on the assemble object
assemble.data(options.data);
assemble.option('layout', options.layout);
assemble.layouts(options.layouts);
assemble.partials(options.partials);

// add some middleware to run when the files are loaded
var middleware = require('./examples/middleware/example');
assemble.onLoad(/\.*/, middleware(assemble));

// build some sample pages based on the templates in test/fixtures
gulp.task('assemble', function () {
  gulp.src('test/fixtures/pages/*.hbs')
    .pipe(gulpAssemble(assemble))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_gh_pages/'));
});

// default task
gulp.task('default', ['assemble']);
