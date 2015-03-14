'use strict';

module.exports = function(assemble) {
  return function(file, next) {
    // do stuff
    file.data.foo = "Added to file.data through example middleware!";
    next();
  };
};
