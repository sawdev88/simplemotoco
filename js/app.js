
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

  $("#lightgallery").lightGallery();

  $('#lightgallery img').each(function () {
    var title = $(this).attr('alt')
    var shop = $(this).data('shop');

    if (shop === undefined) {
      shop = '';
    }

    $(this).after(
      '<div class="img-overlay">' + title +
      '<small>' + shop + '</small>' +
      '</div>'
    )
  })

})
