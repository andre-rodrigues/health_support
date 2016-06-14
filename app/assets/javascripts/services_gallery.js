$(function() {

  function ServicesGallery(container, menu) {
    var self = this;
    var menu = $(menu);
    var prevButton = $(container).find('.prev');
    var nextButton = $(container).find('.next');
    var currentIndex = 0;
    var slideWidth = $(container).find('.service:first').outerWidth(true);
    var list = $(container).find('.services');

    this.showSlide = function(index) {
      currentIndex = index;
      var newPosition = slideWidth * index;
      menu.find('.service').removeClass('active');
      menu.find('.service:eq(' + currentIndex + ')').addClass('active');
      list.animate({ left: newPosition * -1 }, 'slow', 'swing');
    };

    nextButton.on('click', function() {
      if ((currentIndex + 1) == list.find('.service').length) return;
      self.showSlide(currentIndex + 1);
    });

    prevButton.on('click', function() {
      if ((currentIndex) == 0) return;
      self.showSlide(currentIndex - 1);
    });

    menu.find('.service').on('click', function() {
      self.showSlide($(this).data('service') - 1);
    });

    $(container).find('.footer-navigation a').on('click', function() {
      var links = $(container).find('.footer-navigation a');
      self.showSlide(links.index(this));
      links.removeClass('active');
      $(this).addClass('active');
    })
  };

  window.ServicesGallery = ServicesGallery;
});