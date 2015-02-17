var SpainView = Backbone.View.extend({
  el: "#spain",
  spainTemplate: _.template($("#spain-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.spainTemplate());
  }
});