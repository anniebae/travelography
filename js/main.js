

icons = [
  {platform: 'blogger', img: 'stylesheets/images/social_media_icons/blogger.png'},
  {platform: 'facebook', img: 'stylesheets/images/social_media_icons/facebook.png'},
  {platform: 'instagram', img: 'stylesheets/images/social_media_icons/instagram.png'},
  {platform: 'linkedin', img: 'stylesheets/images/social_media_icons/linkedin.png'},
  {platform: 'tumblr', img: 'stylesheets/images/social_media_icons/tumblr.png'},
  {platform: 'twitter', img: 'stylesheets/images/social_media_icons/twitter.png'}
];
facebook = {platform: 'facebook', img: 'stylesheets/images/social_media_icons/facebook.png'}
$(document).ready(function () {
  $('.dropdown-toggle').dropdown();
  $('.bxslider').bxSlider({
    mode: 'fade'
  });
});


var bannerView = new BannerView();
var navbarView = new NavbarView();
var bxsliderView = new BxsliderView();
var socialMediaView = new SocialMediaView();
var siteInfoView = new SiteInfoView();


socialMediaIconsCollection = new SocialMediaIconsCollection(icons);

$(function() {
  console.log(socialMediaIconsCollection);
});