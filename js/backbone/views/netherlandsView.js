var NetherlandsView = Backbone.View.extend({
  el: "#netherlands",
  netherlandsTemplate: _.template($("#netherlands-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.netherlandsTemplate());
  }
});