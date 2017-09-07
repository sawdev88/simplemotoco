$(function() {

  $(window).on('scroll', function () {
    var position = $(window).scrollTop();

    if (position < 400) {
      $('.scroll-effect').css('marginTop', (position / 2) + 'px');
    }
  })

  // Show Nav
  $('.fa-bars').on('click', function () {
    $('.main-nav').toggleClass('show-nav');
    $(this).toggleClass('fa-bars fa-close');

  })

  if($('#lightgallery').length > 0) {
    $("#lightgallery").lightGallery({
      selector: '.item'
    });
  }
})
