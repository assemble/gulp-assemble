/**
 * Assemble <http://assemble.io>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';

module.exports = function(assemble) {

  // events commented out for demo purposes
  var events = assemble.config.plugins.events;

  var plugin = function (params, next) {
    assemble.log.info('Gulp Info Plugin', params.event);
    next();
  };

  plugin.options = {
    name: 'gulp-assemble-info',
    description: 'This plugin just writes out some information.',
    events: ['*:*:*']
  };

  var rtn = {};
  rtn[plugin.options.name] = plugin;
  return rtn;
};
