$(function() {

  function DesktopMenu(container) {
    var self = this;
    var originalHeight = $(container).height();

    this.container = $(container);
    this.toggleButton = this.container.find('nav > .toggle');
    this.linksList = this.container.find('nav > .links-list');
    this.links = this.linksList.find('a');

    // Toggle menu visibility
    this.toggleButton.on('click', function(e) {
      e.preventDefault();

      if (self.linksList.is(':visible')) {
        hideMenu();
      } else {
        showMenu();
      }
    });

    var showMenu = function() {
      self.linksList.slideDown();
      self.toggleButton.addClass('active');
      self.container.animate({
        backgroundColor: '#444',
        opacity: 0.9,
        height: $(window).height()
      }, 400);
    }

    var hideMenu = function() {
      self.linksList.slideUp();
      self.toggleButton.removeClass('active');
      self.container.animate({
        backgroundColor: '#fff',
        opacity: 1,
        height: originalHeight
      }, 400);
    }
  }

  window.DesktopMenu = DesktopMenu;
});