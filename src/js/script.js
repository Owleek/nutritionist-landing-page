$(document).ready(function(){
  $("a.scrollTo").click(function(){
    event.preventDefault();
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top},500);
  });

  $(".burger").click(function(){
    $(".menu").toggleClass('active');
  });
  
  $(".menu").click(function(){
      $(this).removeClass("active");
  });

  $('#carousel-1').owlCarousel({
    loop: false,
    margin: 10,
    autoHeight:true,
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

  $('#carousel-2').owlCarousel({
    loop: false,
    margin: 10,
    autoHeight:true,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:true,
          dots:true,
      },
      1000:{
          items:3,
          nav:true,
          dots:true,
          loop:false
      }
    }
  })

  $('#carousel-3').owlCarousel({
    loop: false,
    margin: 10,
    autoHeight:true,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:true,
          dots:true
      },
      1000:{
          items:3,
          nav:true,
          dots:true,
          loop:false
      }
    }
  })
});

