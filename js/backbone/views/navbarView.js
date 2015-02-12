var NavbarView = Backbone.View.extend({
  el: "#navbar",
  navbarTemplate: _.template($("#navbar-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.navbarTemplate());
  }
});