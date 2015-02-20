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
 * Create an instance of the plugin to use with the given options
 *
 * @param  {Object} `options` Additional options to pass to assemble and use for loading common templates
 * @return {Stream} Stream to be piped through gulp
 */

module.exports = function assemblePlugin (assemble) {
  var init = initPlugin(assemble);
  var render = renderPlugin(assemble);

  return function (options) {
    return es.pipeline.apply(es, [
      init(options),
      render(options)
    ]);
  };
};