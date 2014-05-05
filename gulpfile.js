var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var verb = require('gulp-verb');
var assemble = require('./');


gulp.task('assemble', function () {
  gulp.src('test/fixtures/pages/*.hbs')
    .pipe(assemble({assemblerc: '.assemblerc.yml'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_gh_pages/'));
});

gulp.task('verb', function () {
  gulp.src(['.verbrc.md'])
    .pipe(verb({dest: 'README.md'}))
    .pipe(gulp.dest('./'));
});


gulp.task('default', ['assemble', 'verb']);