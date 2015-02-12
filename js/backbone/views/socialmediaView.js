var SocialMediaView = Backbone.View.extend({
  el: "#socialmedia",
  socialmediaTemplate: _.template($("#socialmedia-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.socialmediaTemplate());
  }
});