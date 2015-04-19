var Chaplin = require('chaplin'),
    Controller;

module.exports = Controller = Chaplin.Controller.extend({
  // Compositions persist stuff between controllers.
  // You may also persist models etc.
  beforeAction: function() {
    // TODO: compose siteview
    // return this.compose('site', SiteView);
  }
});
