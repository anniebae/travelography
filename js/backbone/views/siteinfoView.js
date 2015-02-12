var SiteInfoView = Backbone.View.extend({
  el: "#site-info",
  siteInfoTemplate: _.template($("#site-info-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.siteInfoTemplate());
  },
});