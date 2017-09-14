$(function() {
  var $window = $(window);
  var $eles = $('.bg, .full-width');

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($eles, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport - the offset from top and bottom
      if ((element_bottom_position >= window_top_position-100) &&
          (element_top_position <= window_bottom_position-100)) {
        $element.addClass('in-view');
      }
    });
  }

  // Page Load Animations
  //$('.landing-container').fadeIn('slow');
  setTimeout(function () {
    $('.logo').fadeIn('slow', function () {
      $('.hide').fadeIn('slow');
    });
  }, 500);

  setTimeout(function () {
    $('.pop-up').css('bottom', 0);
    $('.landing-container').fadeIn('slow');
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

    check_if_in_view();
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
