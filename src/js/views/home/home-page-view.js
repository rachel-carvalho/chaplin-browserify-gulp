var View = require('../base/view'),
    template = require('../../templates/home'),
    HomePageView;

module.exports = HomePageView = View.extend({
  autoRender: true,
  className: 'home-page',
  template: template
});
