var AboutView = Backbone.View.extend({
  el: "#about",
  aboutTemplate: _.template($("#about-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.aboutTemplate());
  }
});