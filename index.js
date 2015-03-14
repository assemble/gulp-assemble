/*!
 * gulp-assemble <git://github.com/assemble/gulp-assemble.git>
 *
 * Copyright (c) 2014-2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var renderPlugin = require('template-render');
var initPlugin = require('template-init');
var es = require('event-stream');

module.exports = function assemblePlugin(assemble, opts) {
  var init = initPlugin(assemble);
  var render = renderPlugin(assemble);
  return es.pipeline.apply(es, [init(opts), render(opts)]);
};
