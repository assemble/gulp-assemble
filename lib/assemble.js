/**
 * Assemble <http://assemble.io>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
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

  options.files = [];

  var bufferFiles = function (page, enc, cb) {

    if (page.isNull()) return;
    if (page.isStream()) return this.emit('error', new PluginError('gulp-assemble', 'Streaming not supported'));

    var pageComponent = new Component({
      src: page.path,
      raw: page.contents.toString('utf8'),
      dest: utils.generateDestination(page.path, file.basename(page.path), false, options)
    });

    options.files.push(pageComponent);
    cb();
  };

  var endStream = function (cb) {

    var self = this;

    assemble(options)
      .build(function (err, results) {
          if (err) {
            return cb(new PluginError('gulp-assemble', err, opts));
          }

          // write out the resulting pages
          var keys = _.keys(results.pages);
          async.each(keys,
            function (key, nextPage) {
              var page = results.pages[key];

              self.push(new File({
                path: page.dest,
                contents: new Buffer(page.content)
              }));
              nextPage();
            },
          cb);
      });
  };

  return through.obj(bufferFiles, endStream);


};
