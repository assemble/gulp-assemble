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
        cwd: yfmFixtures,
        middleware: [middleware],
        log: {level: 'warning', theme: 'socket.io'}
      };

      var stream = assemble(options);

      var fakeFile = new File({
        cwd: yfmFixtures,
        base: yfmFixtures,
        path: yfmFixtures + '/alert.hbs',
        contents: new Buffer('sup')
      });

      stream.on('data', function (page) {
        expect('sup').to.eql(page.contents.toString());
      });

      stream.on('end', function () {
        done();
      });

      stream.write(fakeFile);
      stream.end();
    });
  });

});
