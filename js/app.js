$(function() {

  $(window).on('scroll', function () {
    var position = $(window).scrollTop();

    if (position < 360) {
      $('.landing-banner').css('marginTop', -position);
      $('.down-arrow').css('paddingBottom', (position * 1.2));
    }
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
