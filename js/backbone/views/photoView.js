var PhotoView = Backbone.View.extend({
  el: '#wrapper',
  bannerCountryTemplate: _.template($('#photos-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.bannerCountryTemplate());
    return this;
  },
});