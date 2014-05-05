module.exports = function(assemble) {
  var options = assemble.config;


  /**
   * The actual plugin
   */

  var middleware = function (params, next) {
    // do stuff
    next();
  };



  /**
   * Plugin events, define a single `event`
   * or an `events` array
   */

  middleware.event = 'page:before:render';
  return {
    'assemble-middleware-foo': middleware
  };
};