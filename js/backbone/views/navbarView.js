var NavbarView = Backbone.View.extend({
  el: "#navbar",
  navbarTemplate: _.template($("#navbar-template").html()),
  homeBannerTemplate: _.template($("#home-banner-template").html()),
  aboutBannerTemplate: _.template($("#about-banner-template").html()),
  aboutBodyTemplate: _.template($("#about-body-template").html()),
  initialize: function() {
    $banner = $('#banner');
    $body   = $('#body');
    this.renderNavbar();
  },
  events: {
    'click #about-btn': 'showAbout',
    'click #home-btn': 'showHome',
    'click #netherlands-tab': 'showNetherlands'
  },
  renderNavbar: function() {
    this.$el.html(this.navbarTemplate());
    return this;
  },
  showAbout: function() {
    $banner.html(this.aboutBannerTemplate());
    $body.html(this.aboutBodyTemplate());
    return this;
  },
  showHome: function() {
    $banner.html(this.homeBannerTemplate());
    return this;
  },
});