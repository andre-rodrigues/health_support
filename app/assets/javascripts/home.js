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
//= require mobile_check
//= require desktop_menu
//= require mobile_menu
//= require_self

$(function() {
  if (!isMobile()) resizePages();

  $(window).resize(function() {
    if (!isMobile()) resizePages();
  });

  function resizePages() {
    var headerHeight = $('body > header').height();
    $('.page').css('height', $(window).height() - headerHeight);
  }

  // Page navigation
  function navigateToPage(page) {
    var top = $(page).position().top - $('body > header').height();
    $("html, body").animate({ scrollTop: top }, 'slow', 'swing');
  }

  $('.page .next-page').on('click', function() {
    var page = $(this).closest('.page');
    navigateToPage(page.next('.page'));
  });

  // Services Gallery
  new ServicesGallery('.page-2 .services-gallery', '.page-2 .services-list');

  // Mobile menu
  new MobileMenu('.mobile-menu');

  // Desktop menu
  new DesktopMenu('body > header');

  // Contact Link
  function goToContact() {
    var marginTop = 50;
    var top = $('.page-4').position().top - $('body > header').height() - marginTop;
    $("html, body").animate({ scrollTop: top }, 'slow', 'swing');
  }

  $('header > .contact-link').on('click', function() {
    goToContact();
  });

  if (location.hash.match(/contato/)) {
    goToContact();
  }
});
