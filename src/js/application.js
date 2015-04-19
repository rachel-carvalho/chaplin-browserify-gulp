var $ = require('jquery'),
    Backbone = require('backbone'),
    Chaplin,
    Application;

Backbone.$ = $;
// We need to setup backbone before requiring chaplin
Chaplin = require('chaplin');

module.exports = Application = Chaplin.Application.extend({
});
