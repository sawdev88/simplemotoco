$(function() {

  setTimeout(function () {
    $('.pop-up').css('bottom', 0);
  }, 3000);

  // Smooth Scroll
  $('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  // Scroll to top
  $('.arrow-up').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

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
