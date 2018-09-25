$(function() {


  function load_more_function(){

    global $wp_query;

    $paged = $_POST['paged'] ? $_POST['paged'] : 1;

    $args = array(
      'post_type' => 'post',
      'post_status' => 'publish',
      'paged' => $paged
//    'orderby' => 'date', // we will sort posts by date
//    'order' => $_POST['date'] // ASC или DESC
    );

    $args['tax_query'] = array( 'relation'=>'AND' );

    // for taxonomies / categories
    if( isset( $_POST['cat'] ) && $_POST['cat'] != 'all' && $_POST['cat'] != '' ) {
      $args['tax_query'][] = array(
        'taxonomy' => 'category',
        'field' => 'term_id',
        'terms' => $_POST['cat']
      );
    }


    function pre($v) {
      echo '<pre>';
      print_r($v);
      echo '</pre>';
    }

    $query = new WP_Query( $args );
    $max_pages = $query->max_num_pages;

    if( $query->have_posts() ) :

      while( $query->have_posts() ): $query->the_post();
        get_template_part( 'parts/blog', 'item' );
      endwhile;
      wp_reset_postdata();

      if ($paged < $max_pages):
        $next_page = $paged + 1;
        echo '<div class="col-12 btn-more"><a href="#" class="main-btn btn-shevron" id="load-more" data-page="'.$next_page.'" data-cat="'.$_POST['cat'].'">ЗАГРУЗИТЬ ЕЩЕ</a></div>';
      endif;

    else :
      echo '<div class="col-12"><div class="alert alert-info" role="alert">Кейсы не найдени</div></div>';
    endif;

    wp_die();
  }
  
  add_action('wp_ajax_load_more', 'load_more_function');
  add_action('wp_ajax_nopriv_load_more', 'load_more_function');


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

