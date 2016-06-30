// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require services_gallery
//= require desktop_menu
//= require mobile_menu
//= require_self

$(function() {

  $('.service .open-details').on('click', function() {
    var content = $(this).next('.content');
    var linkDescription = $(this).find('.more');

    if (content.is(':visible')) {
      content.slideUp(function() {
        linkDescription.show();
      });
    } else {
      linkDescription.hide();
      content.slideDown();
    }
  });

  // Services Gallery
  new ServicesGallery('.page-2 .services-gallery', '.page-2 .services-list');

  // Mobile menu
  new MobileMenu('.mobile-menu');

  // Desktop menu
  new DesktopMenu('body > header');
});
