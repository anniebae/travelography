var AppView = Backbone.View.extend({
  homeBodyTemplate: _.template($("#home-body-template").html()),
  homeBannerTemplate: _.template($("#home-banner-template").html()),
  initialize: function() {
    navView = new NavbarView();
    this.renderHome();
  },
  renderHome: function() {
    $('#banner').html(this.homeBannerTemplate());
    $('#body').html(this.homeBodyTemplate());
  },
});