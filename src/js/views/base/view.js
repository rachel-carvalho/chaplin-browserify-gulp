var Chaplin = require('chaplin'),
    View;

module.exports = View = Chaplin.View.extend({
  // Precompiled templates function initializer
  getTemplateFunction: function() {
    return this.template;
  }
});
