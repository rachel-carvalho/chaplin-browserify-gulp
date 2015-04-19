var View = require('./base/view'),
    template = require('../templates/site'),
    SiteView;

// Site view is a top-level view which is bound to body.
module.exports = SiteView = View.extend({
  container: 'body',
  id: 'site-container',
  regions: {
    header: '#header-container',
    main: '#page-container'
  },
  template: template
});
