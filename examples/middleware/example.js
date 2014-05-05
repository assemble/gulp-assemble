module.exports = function(assemble) {
  var options = assemble.config;
  // console.log(assemble)

  var middleware = function (params, next) {
    console.log('assemble-middleware-foo', params.event);
    // do stuff
    next();
  };


  // Define a single `event`, or an `events` array
  middleware.event = 'page:before:render';
  return {
    'assemble-middleware-foo': middleware
  };
};