var Application = require('./application'),
    routes = require('./routes'),
    app;

console.log('init');

// All controllers are required by bundler, so that they're available to chaplin
app = new Application({
  controllerSuffix: '-controller',
  routes: routes
});

window.app = app;
