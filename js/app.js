$(function() {

  $(window).on('scroll', function () {
    var position = $(window).scrollTop();

    if (position < 360) {
      $('.landing-banner').css('marginTop', -position);
    }
  })

  // Show Nav
  $('.fa-bars').on('click', function () {
    $('.main-nav').toggleClass('show-nav');
    $(this).toggleClass('fa-bars fa-close');

  })

  $("#lightgallery").lightGallery({
    selector: '.item'
  });
})
