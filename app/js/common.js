$(function() {

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});
  
//------------------------------пошук-----------------------------
  $('.search-button').click(function() {
    $('.search-form').toggleClass('search-form--active');
    $('.header__container').toggleClass('header__container--search');
    $('.search-button').toggleClass('search-button--close');
  });


//----------------------------masonry --- сетка------------------------------
 
  if($('*').is('.grid')) {
    var $grid = $('.grid').imagesLoaded( function() {
      $grid.masonry({
        itemSelector: '.grid-item',
        columnWidth: 1,
        gutter: 100
      });
    });
  }


//----------------------------wowJS-------------------------------
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();


//----------------------------паралакс----------------------------------
  $(window).scroll(function() {

    var parallax = $(this).scrollTop();

    $('.parallax--one').css({
      'transform' : 'translate(0%, ' + parallax/2 + '%)'
    });
      
    $('.parallax--two').css({
      'transform' : 'translate(0%, ' + parallax/13 + '%)'
    });

    $('.parallax--three').css({
      'transform' : 'translate(0%, ' + parallax/7 + '%)'
    });

    $('.parallax--four').css({
      'transform' : 'translate(0%, ' + parallax/8 + '%)'
    });

    $('.parallax--five').css({
      'transform' : 'translate(0%, ' + parallax/8 + '%)'
    });

    $('.parallax--six').css({
      'transform' : 'translate(0%, ' + parallax/6 + '%)'
    });

    $('.parallax--seven').css({
      'transform' : 'translate(0%, ' + parallax/10 + '%)'
    });

    $('.parallax--eight').css({
      'transform' : 'translate(0%, ' + parallax/13 + '%)'
    });
  });


//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger-active');
    $('.nav').toggleClass('nav-active');
    $('.header').toggleClass('header--menu');
    $('.wrapper').toggleClass('wrapper--active');
  });

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>1){
          $('.header').addClass('header-active');
      }
      else if ($(this).scrollTop()<1){
          $('.header').removeClass('header-active');
      }
  });

//-------------------------скорость якоря---------------------------------------
  $(".header__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  //--------------------закриття меню при кліку на ссилку якоря--------------------
     // $('.hamburger').removeClass('hamburger-active');
     // $('.header-menu').removeClass('header-menu');
     // $('.header-active').removeClass('header-active');
     // $('.nav-active').removeClass('nav-active');

  });
});

//----------------------------------------preloader----------------------------------

  $(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
  });

