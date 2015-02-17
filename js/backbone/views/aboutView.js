var AboutView = Backbone.View.extend({
  el: "#banner",
  aboutBodyTemplate: _.template($("#about-body-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.aboutTemplate());
  }
});