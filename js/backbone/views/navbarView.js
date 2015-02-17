var NavbarView = Backbone.View.extend({
  el: "#navbar",
  navbarTemplate: _.template($("#navbar-template").html()),
  aboutTemplate: _.template($("#about-template").html()),
  bannerTemplate: _.template($("#banner-home-template").html()),
  initialize: function() {
    netherlandsRow1 = new PhotoCollection(netherlands1);
    netherlandsRow2 = new PhotoCollection(netherlands2);
    netherlandsRow3 = new PhotoCollection(netherlands3);
    netherlandsRow4 = new PhotoCollection(netherlands4);
    netherlandsRow5 = new PhotoCollection(netherlands5);
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