$(function() {

  function MobileMenu(container) {
    var linksWrapper = $(container).find('.links');
    var openButton = $(container).find('.hamburguer-link');
    var closeButton = $(container).find('.close-link');

    openButton.on('click', function(e) {
      e.preventDefault();
      linksWrapper.slideDown(function() {
        openButton.hide();
        closeButton.show()
      });
    });

    closeButton.on('click', function(e) {
      e.preventDefault();
      linksWrapper.slideUp(function() {
        closeButton.hide();
        openButton.show()
      });
    });
  }

  window.MobileMenu = MobileMenu;
});