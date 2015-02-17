var ItalyView = Backbone.View.extend({
  el: "#italy",
  italyTemplate: _.template($("#italy-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.italyTemplate());
  },
});