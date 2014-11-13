module.exports = function(assemble) {
  var options = assemble.options;
  return function exampleMiddleware (file, next) {
    // do stuff
    file.data.quote = "Added to file.data through example middleware!";
    next();
  };
};