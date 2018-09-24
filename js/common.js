$(document).ready(function(){


//catalog-menu
$('.catalog-item').on('click', function(event) {
	$('.cat-menu').toggle('show')
})

//mobile-menu
$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked"); 
});

//scroll-style
$(function(){
    $('.wrapp-text').jScrollPane();
});


//slick-slider
$('.product-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1171,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1 
      }
    },
    {
    	breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 
      }
    },
  ]
});

//slow anchor links 
$(document).ready(function(){
    var headerHeight = $('header').outerHeight();

    $('.slideSection').click(function(e) {
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });
});

});

