var Controller = require('./base/controller'),
    HomeController;

module.exports = Controller = Controller.extend({
  beforeAction: function() {
    // TODO: implement super!
    // super
    // TODO: create HeaderView after implementing SiteView and composing it in base controller
    // this.compose('header', HeaderView, {region: 'header'});
  },
  index: function() {
    // TODO: implement HomePageView
    // this.view = new HomePageView({region: 'main'});
  }
});
