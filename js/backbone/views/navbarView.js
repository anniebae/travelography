var NavbarView = Backbone.View.extend({
  el: "#navbar",
  navbarTemplate: _.template($("#navbar-template").html()),
  homeBannerTemplate: _.template($("#home-banner-template").html()),
  aboutBannerTemplate: _.template($("#about-banner-template").html()),
  aboutBodyTemplate: _.template($("#about-body-template").html()),
  englandTemplate: _.template($("#england-template").html()),
  englandBannerTemplate: _.template($("#england-banner-template").html()),
  franceTemplate: _.template($("#france-template").html()),
  franceBannerTemplate: _.template($("#france-banner-template").html()),
  italyTemplate: _.template($("#italy-template").html()),
  italyBannerTemplate: _.template($("#italy-banner-template").html()),
  netherlandsTemplate: _.template($("#netherlands-template").html()),
  netherlandsBannerTemplate: _.template($("#netherlands-banner-template").html()),
  scotlandTemplate: _.template($("#scotland-template").html()),
  scotlandBannerTemplate: _.template($("#scotland-banner-template").html()),
  spainTemplate: _.template($("#spain-template").html()),
  spainBannerTemplate: _.template($("#spain-banner-template").html()),
  walesTemplate: _.template($("#wales-template").html()),
  walesBannerTemplate: _.template($("#wales-banner-template").html()),
  initialize: function() {
    this.renderNavbar();
  },
  events: {
    'click #about-btn'        : 'showAbout',
    'click #home-btn'         : 'showHome',
    'click #england-tab'      : 'showEngland',
    'click #france-tab'       : 'showFrance',
    'click #italy-tab'        : 'showItaly',
    'click #netherlands-tab'  : 'showNetherlands',
    'click #scotland-tab'     : 'showScotland',
    'click #spain-tab'        : 'showSpain',
    'click #wales-tab'        : 'showWales'
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
  showFrance: function() {
    $('#banner').html(this.franceBannerTemplate());
    $('#body').html(this.franceTemplate());
  },
  showItaly: function() {
    $('#banner').html(this.italyBannerTemplate());
    $('#body').html(this.italyTemplate());
  },
  showNetherlands: function() {
    $('#banner').html(this.netherlandsBannerTemplate());
    $('#body').html(this.netherlandsTemplate());
  },
  showScotland: function() {
    $('#banner').html(this.scotlandBannerTemplate());
    $('#body').html(this.scotlandTemplate());
  },
  showSpain: function() {
    $('#banner').html(this.spainBannerTemplate());
    $('#body').html(this.spainTemplate());
  },
  showWales: function() {
    $('#banner').html(this.walesBannerTemplate());
    $('#body').html(this.walesTemplate());
  }
});