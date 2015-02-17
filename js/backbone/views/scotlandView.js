var ScotlandView = Backbone.View.extend ({
  el: "#scotland",
  scotlandTemplate: _.template($("#scotland-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.scotlandTemplate());
  },
});