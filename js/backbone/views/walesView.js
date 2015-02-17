var WalesView = Backbone.View.extend({
  el: "#wales",
  walesTemplate: _.template($("#wales-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.walesTemplate());
  }
});