/**
 * Assemble <http://assemble.io>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var path = require('path');
var async = require('async');
var assemble = require('assemble');
var through = require('through2');
var gutil = require('gulp-util');
var _ = require('lodash');

var PluginError = gutil.PluginError;
var File = gutil.File;

var Component = assemble.models.Component;
var utils = assemble.utils.utils;

module.exports = function (options) {

  options = _.extend(options || {}, {
    flatten: false,
    ext: '.html'
  });

  options.files = [];

  var bufferFiles = function (page, enc, callback) {
    if (page.isNull()) {
      return;
    }

    if (page.isStream()) {
      return this.emit('error', new PluginError('gulp-assemble', 'Streaming not supported'));
    }

    var basename = path.basename(page.path, path.extname(page.path));
    var pageComponent = new Component({
      src: page.path,
      orig: page.contents.toString('utf8'),
      dest: utils.generateDestination(page.path, basename, false, options)
    });
    options.files.push(pageComponent);

    callback();
  };

  var endStream = function (callback) {
    var self = this;

    assemble(options).build(function (err, results) {
      if (err) {
        return callback(new PluginError('gulp-assemble', err, options));
      }

      // write out the resulting pages
      var keys = _.keys(results.pages);

      async.each(keys, function (key, next) {
        var page = results.pages[key];
        self.push(new File({path: page.dest, contents: new Buffer(page.content)}));

        next();
      }, callback);
    });
  };

  return through.obj(bufferFiles, endStream);
};
