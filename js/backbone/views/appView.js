var AppView = Backbone.View.extend({
  bxsliderTemplate: _.template($("#bxslider-template").html()),
  socialmediaTemplate: _.template($("#socialmedia-template").html()),
  siteInfoTemplate: _.template($("#site-info-template").html()),
  initialize: function() {
    new BannerView();
    new NavbarView();
    this.renderHome();
  },
  renderHome: function() {
    $('#body').append(this.bxsliderTemplate());
    $('#body').append(this.socialmediaTemplate());
    $('#body').append(this.siteInfoTemplate());
  },
});