var NavbarView = Backbone.View.extend({
  el: "#navbar",
  navbarTemplate: _.template($("#navbar-template").html()),
  homeBannerTemplate: _.template($("#home-banner-template").html()),
  aboutBannerTemplate: _.template($("#about-banner-template").html()),
  aboutBodyTemplate: _.template($("#about-body-template").html()),
  englandTemplate: _.template($("#england-template").html()),
  englandBannerTemplate: _.template($("#england-banner-template").html()),
  franceTemplate: _.template($("#france-template").html()),
  netherlandsTemplate: _.template($("#netherlands-template").html()),
  scotlandTemplate: _.template($("#scotland-template").html()),
  spainTemplate: _.template($("#spain-template").html()),
  walesTemplate: _.template($("#wales-template").html()),
  initialize: function() {
    this.renderNavbar();
  },
  events: {
    'click #about-btn': 'showAbout',
    'click #home-btn': 'showHome',
    'click #england-tab': 'showEngland'
  },
  renderNavbar: function() {
    this.$el.html(this.navbarTemplate());
    return this;
  },
  showAbout: function() {
    $('#banner').html(this.aboutBannerTemplate());
    $('#body').html(this.aboutBodyTemplate());
    return this;
  },
  showHome: function() {
    $('#banner').html(this.homeBannerTemplate());
    return this;
  },
  showEngland: function() {
    $('#banner').html(this.englandBannerTemplate());
    $('#body').html(this.englandTemplate());
  },
});