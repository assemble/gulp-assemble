/*!
 * gulp-assemble <git://github.com/assemble/gulp-assemble.git>
 *
 * Copyright (c) 2014-2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var path = require('path');
var File = require('gulp-util').File;
var assert = require('assert');
var fixtures = require('fixture');
var assemble = require('assemble');
var gulpAssemble = require('../');

var fixture = path.join(fixtures, 'handlebars/with-yfm');

describe('gulp-assemble', function() {
  describe('when assemble is configured with options', function() {
    it('should build files', function(done) {

      assemble.data({ foo: 'bar' });
      assemble.helper('upper', function (str) {
        return str.toUpperCase();
      });

      var stream = gulpAssemble(assemble);

      var fakeFile = new File({
        cwd: fixture,
        base: fixture,
        path: fixture + '/alert.hbs',
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
