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
