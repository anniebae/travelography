var NavbarView = Backbone.View.extend({
  el: "#navbar",
  navbarTemplate: _.template($("#navbar-template").html()),
  aboutTemplate: _.template($("#about-template").html()),
  bannerTemplate: _.template($("#banner-home-template").html()),
  initialize: function() {
    this.render();
  },
  events: {
    'click #about-btn': 'showAbout',
    'click #home-btn': 'showHome'
  },
  render: function() {
    this.$el.html(this.navbarTemplate());
    return this;
  },
  showAbout: function() {
    $('#banner').html(this.aboutTemplate());
    return this;
  },
  showHome: function() {
    $('#banner').html(this.bannerTemplate());
    return this;
  },
});