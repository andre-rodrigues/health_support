$(function() {

  function ServicesGallery(container, menu) {
    var self = this;
    var menu = $(menu);
    var prevButton = $(container).find('.prev');
    var nextButton = $(container).find('.next');
    var currentIndex = 0;
    var slideWidth = $(container).find('.service:first').width();
    var list = $(container).find('.services');

    this.showSlide = function(index) {
      currentIndex = index;
      var newPosition = slideWidth * index;
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
  };

  window.ServicesGallery = ServicesGallery;
});