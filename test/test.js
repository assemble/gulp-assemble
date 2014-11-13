/**
 * Assemble <http://assemble.io>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';

require('mocha');
var path = require('path');
var File = require('gulp-util').File;
var expect = require('chai').expect;
var fixtures = require('fixture');
var assemble = require('../');

var middleware = path.join(process.cwd(), 'examples/*.js');
var yfmFixtures = path.join(fixtures, 'handlebars/with-yfm');


describe('gulp-assemble', function() {
  describe('when a config object is passed to assemble', function() {
    it('should build files', function(done) {

      var options = {
        helpers: {
          upper: function (str) {
            return str.toUpperCase();
          }
        }
      };

      var stream = assemble(options);

      var fakeFile = new File({
        cwd: yfmFixtures,
        base: yfmFixtures,
        path: yfmFixtures + '/alert.hbs',
        contents: new Buffer('---\ntitle: sup\n---\n{{upper title}}')
      });

      stream.on('data', function (page) {
        expect('SUP').to.eql(page.contents.toString());
      });

      stream.on('end', function () {
        done();
      });

      stream.write(fakeFile);
      stream.end();
    });
  });

});
