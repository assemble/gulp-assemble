
// Node.js
var path = require('path');

// node_moudles
require('mocha');

// local modules
var assemble = require('../');


var File = require('gulp-util').File;
var expect = require('chai').expect;


describe('gulp-assemble', function() {

  it('should work', function(done) {

    var options = {
      expand: true,
      cwd: 'node_modules/fixture/handlebars/with-yfm',
      plugins: [path.resolve(path.join(__dirname, '..', 'lib', 'plugins')) + '/**/*.js'],
      log: {
        level: 'warning',
        theme: 'socket.io'
      }
    };

    var stream = assemble('test', options);

    var fakeFile = new File({
      cwd: 'node_modules/fixture/handlebars/with-yfm',
      base: 'node_modules/fixture/handlebars/with-yfm',
      path: 'node_modules/fixture/handlebars/with-yfm/alert.hbs',
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
