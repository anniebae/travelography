var NavbarView = Backbone.View.extend({
  el: "#navbar",
  navbarTemplate: _.template($("#navbar-template").html()),
  aboutTemplate: _.template($("#about-template").html()),
  bannerTemplate: _.template($("#banner-home-template").html()),
  initialize: function() {
    netherlandsArray = new PhotoCollection(netherlandsPhotos);
    this.render();
  },
  events: {
    'click #about-btn': 'showAbout',
    'click #home-btn': 'showHome',
    'click #netherlands-tab': 'showNetherlands'
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
  showNetherlands: function() {
    photoView = new PhotoView();
  },
});