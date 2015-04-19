var Controller = require('./base/controller'),
    HeaderView = require('../views/home/header-view'),
    HomePageView = require('../views/home/home-page-view'),
    __parent = Controller.prototype,
    HomeController;

module.exports = HomeController = Controller.extend({
  beforeAction: function() {
    __parent.beforeAction.apply(this, arguments);
    this.reuse('header', HeaderView, {region: 'header'});
  },

  index: function() {
    this.view = new HomePageView({region: 'main'});
  }
});
