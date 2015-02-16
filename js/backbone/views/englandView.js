

var EnglandView = Backbone.View.extend({
  el: "#england",
  englandTemplate: _.template($("#england-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.englandTemplate());
  },
});

