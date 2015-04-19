var Chaplin = require('chaplin'),
    SiteView = require('../../views/site-view'),
    Controller;

module.exports = Controller = Chaplin.Controller.extend({
  // `reuse` persists stuff between controllers.
  // You may also persist models etc.
  beforeAction: function() {
    console.log('Controller');
    return this.reuse('site', SiteView);
  }
});
