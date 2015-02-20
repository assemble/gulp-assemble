/*!
 * gulp-assemble <git://github.com/assemble/gulp-assemble.git>
 *
 * Copyright (c) 2014-2015, Brian Woodward.
 * Licensed under the MIT License.
 */

var renderPlugin = require('template-render');
var initPlugin = require('template-init');
var es = require('event-stream');

/**
 * Pass in an instance of Assemble and additional options and get a Stream
 * to pass through the gulp pipeline.
 *
 * ```js
 * var assemble = require('assemble');
 * var gulpAssemble = require('gulp-assemble');
 *
 * gulp.src(['*.hbs'])
 *   .pipe(gulpAssemble(assemble))
 *   .pipe(gulp.dest('dist'));
 * ```
 *
 * @param {Object} `assemble` Instance of Assemble to use in the plugin.
 * @param {Object} `options` Additional options to pass through to Assemble
 * @return {Stream} Stream to use in gulp pipeline.
 */

module.exports = function assemblePlugin (assemble, options) {
  var init = initPlugin(assemble);
  var render = renderPlugin(assemble);
  return es.pipeline.apply(es, [
    init(options),
    render(options)
  ]);
};
