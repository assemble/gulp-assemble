var gulp = require('gulp');
var assemble = require('./');

/**
 * Remove this file before we release the plugin
 */

gulp.task('assemble', function () {
  gulp.src('test/fixtures/pages/*.hbs')
    .pipe(assemble({assemblerc: '.assemblerc.yml'}))
    .pipe(gulp.dest('_gh_pages/'));
});

gulp.task('default', ['assemble']);