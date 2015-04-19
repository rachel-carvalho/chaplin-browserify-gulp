var Chaplin = require('chaplin'),
    View = require('./view'),
    CollectionView;

module.exports = CollectionView = Chaplin.CollectionView.extend({
  // This class doesn’t inherit from the application-specific View class,
  // so we need to borrow the method from the View prototype:
  getTemplateFunction: View.prototype.getTemplateFunction
});
