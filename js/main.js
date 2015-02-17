$(document).ready(function () {
  $('.dropdown-toggle').dropdown();
  $('.bxslider').bxSlider({
    mode: 'fade'
  });
});

photoCollection = new PhotoCollection(netherlandsPhotos);



var bannerView = new BannerView();
var navbarView = new NavbarView();
var bxsliderView = new BxsliderView();
var socialMediaView = new SocialMediaView();
var siteInfoView = new SiteInfoView();
var aboutView = new AboutView();
var englandView = new EnglandView();
var franceView = new FranceView();
var italyView = new ItalyView();
var netherlandsView = new NetherlandsView();
var scotlandView = new ScotlandView();
var spainView = new SpainView();
var walesView = new WalesView();