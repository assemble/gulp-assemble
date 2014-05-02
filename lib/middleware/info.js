/**
 * Assemble <http://assemble.io>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

'use strict';

module.exports = function(assemble) {

  // events commented out for demo purposes
  var events = assemble.config.middleware.events;

  var middleware = function (params, next) {
    assemble.log.info('gulp-info middleware', params.event);
    next();
  };

  middleware.options = {
    name: 'gulp-assemble-info',
    description: 'This middleware just writes out some information.',
    events: ['*:*:*']
  };

  var rtn = {};
  rtn[middleware.options.name] = middleware;
  return rtn;
};
