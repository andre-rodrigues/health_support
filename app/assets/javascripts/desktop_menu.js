$(function() {

  function DesktopMenu(container) {
    var self = this;
    var originalHeight = $(container).height();

    this.container = $(container);
    this.toggleButton = this.container.find('nav > .toggle');
    this.closeButton = this.container.find('nav > .close');
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

    this.closeButton.on('click', function() {
      hideMenu();
    })

    var showMenu = function() {
      var newHeight = $(window).height();

      self.closeButton.fadeIn();
      self.linksList.css('height', newHeight - 150);
      self.linksList.slideDown();
      self.toggleButton.addClass('active');
      self.container.animate({
        backgroundColor: 'rgba(68, 68, 68, 0.9)',
        height: newHeight
      }, 400);

      $(document).on('keyup', function(e) {
        if (e.keyCode == 27) {
          $(document).off('keyup');
          hideMenu();
        };
      });
    }

    var hideMenu = function() {
      self.closeButton.fadeOut();
      self.linksList.slideUp();
      self.toggleButton.removeClass('active');
      self.container.animate({
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: originalHeight
      }, 400);
    }
  }

  window.DesktopMenu = DesktopMenu;
});