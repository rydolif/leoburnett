$(function() {

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

//----------------------------masonry --- сетка------------------------------
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 1,
    gutter: 102
  });


//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger-active');
    $('nav').toggleClass('nav-active');
    $('header').toggleClass('header--menu');
    $('main').toggleClass('main--active');
    $('footer').toggleClass('main--active');
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