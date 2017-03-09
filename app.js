
$(function() {

  $(window).on('scroll', function () {
    // Slide logo o left
    $('.logo').css({
      'left': '2rem',
      'transform': 'translateX(0)'
    });
  })

  // Show Nav
  $('.fa-bars').on('click', function () {
    $('.main-nav').toggleClass('show-nav');
    $(this).toggleClass('fa-bars fa-close');

  })

})
