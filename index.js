/**
 * Assemble <http://assemble.io>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var assemble = require('assemble');
var es = require('event-stream');
var gutil = require('gulp-util');
var _ = require('lodash');
var stack = require('assemble/lib/stack');

var PluginError = gutil.PluginError;

/**
 * Create an instance of the plugin to use with the given options
 *
 * @param  {Object} `options` Additional options to pass to assemble and use for loading common templates
 * @return {Stream} Stream to be piped through gulp
 */

var plugin = module.exports = function (options) {

  var opts = _.extend({}, options);
  assemble.option(opts);

  if (opts.data) assemble.data(opts.data);
  if (opts.layouts) assemble.layouts(opts.layouts);
  if (opts.partials) assemble.partials(opts.partials);
  if (opts.pages) assemble.pages(opts.pages);
  if (opts.helpers) assemble.helpers(opts.helpers);

  return es.pipeline.apply(es, [
    stack.src.call(assemble, null, opts),
    stack.dest.call(assemble, '', opts)
  ]);

}

/**
 * Expose instance of assemble for further modification
 */

plugin.instance = assemble;
