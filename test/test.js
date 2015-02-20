/**
 * Assemble <http://assemble.io>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';

var path = require('path');
var File = require('gulp-util').File;
var assert = require('assert');
var fixtures = require('fixture');
var assemble = require('assemble');
var gulpAssemble = require('../')(assemble);

var middleware = path.join(process.cwd(), 'examples/*.js');
var yfmFixtures = path.join(fixtures, 'handlebars/with-yfm');


describe('gulp-assemble', function() {
  describe('when assemble is configured with options', function() {
    it('should build files', function(done) {

      var options = {
        helpers: {
          upper: function (str) {
            return str.toUpperCase();
          }
        }
      };

      assemble.option(options);
      assemble.data({ foo: 'bar' });

      var stream = gulpAssemble(options);

      var fakeFile = new File({
        cwd: yfmFixtures,
        base: yfmFixtures,
        path: yfmFixtures + '/alert.hbs',
        contents: new Buffer('---\ntitle: sup\n---\n{{upper title}} - {{foo}}')
      });

      stream.on('data', function (page) {
        assert.equal('SUP - bar', page.contents.toString());
      });

      stream.on('end', function () {
        done();
      });

      stream.write(fakeFile);
      stream.end();
    });
  });

});
