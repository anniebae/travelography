var BxsliderView = Backbone.View.extend({
  el: "#bxslider",
  bxsliderTemplate: _.template($("#bxslider-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.bxsliderTemplate());
  }
});