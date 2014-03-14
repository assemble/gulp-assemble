/*
 * Assemble
 * https://github.com/assemble/
 *
 * Copyright (c) 2013 Upstage
 * Licensed under the MIT license.
 */

// node_modules
var assemble = require('assemble');
var through = require('through2');
var gutil = require('gulp-util');
var file = require('fs-utils');
var async = require('async');
var _ = require('lodash');

var Component = assemble.models.Component;
var PluginError = gutil.PluginError;
var File = gutil.File;
var utils = assemble.utils.utils;

module.exports = function (name, opts) {

  var options = _.extend({}, opts, {
    flatten: false,
    ext: '.html'
  });

  options.components = [];

  var bufferFiles = function (page, enc, cb) {

    if (page.isNull()) return;
    if (page.isStream()) return this.emit('error', new PluginError('gulp-assemble', 'Streaming not supported'));

    var component = new Component({
      src: page.path,
      raw: page.contents.toString('utf8'),
      dest: utils.generateDestination(page.path, file.basename(page.path), false, options)
    });

    options.components.push(component);
    cb();
  };

  var endStream = function (cb) {

    var self = this;
    var assembleOptions = {
      name: name,
      metadata: options
    };

    assemble(assembleOptions)
      .build(function (err, results) {
          if (err) {
            return cb(new PluginError('gulp-assemble', err, opts));
          }

          // write out the resulting components
          var keys = _.keys(results.components);
          async.each(keys,
            function (key, nextComponent) {
              var component = results.components[key];

              self.push(new File({
                path: component.dest,
                contents: new Buffer(component.content)
              }));
              nextComponent();
            },
          cb);
      });
  };

  return through.obj(bufferFiles, endStream);


};
