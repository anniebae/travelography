var BannerView = Backbone.View.extend({
  el: "#banner",
  bannerTemplate: _.template($("#home-banner-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.bannerTemplate());
  },
});

