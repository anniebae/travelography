var AppView = Backbone.View.extend({
  bxsliderTemplate: _.template($("#bxslider-template").html()),
  socialmediaTemplate: _.template($("#socialmedia-template").html()),
  siteInfoTemplate: _.template($("#site-info-template").html()),
  homeBannerTemplate: _.template($("#home-banner-template").html()),
  initialize: function() {
    navView = new NavbarView();
    this.renderHomeBanner();
    this.renderHomeBody();
  },
  renderHomeBanner: function() {
    $('#banner').html(this.homeBannerTemplate());
  },
  renderHomeBody: function() {
    $('#body').append(this.bxsliderTemplate());
    $('#body').append(this.socialmediaTemplate());
    $('#body').append(this.siteInfoTemplate());
  },
});