$(document).ready(function(){
  $("a.scrollTo").click(function(){
    event.preventDefault();
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top},500);
  });


  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots:true
        },
        1000:{
            items:1,
            nav:true,
            dots:true,
            loop:false
        }
    }
})
});

