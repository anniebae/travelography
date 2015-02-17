var FranceView = Backbone.View.extend({
  el: "#france",
  franceTemplate: _.template($("#france-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.franceTemplate());
  }
});