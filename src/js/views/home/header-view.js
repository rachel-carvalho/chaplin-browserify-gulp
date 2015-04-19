var View = require('../base/view'),
    template = require('../../templates/header'),
    HeaderView;

module.exports = HeaderView = View.extend({
  autoRender: true,
  className: 'header',
  tagName: 'header',
  template: template
});
