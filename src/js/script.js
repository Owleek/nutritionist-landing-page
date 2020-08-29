$(document).ready(function(){
  $("a.scrollTo").click(function(){
    event.preventDefault();
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top},500);
  });

  $(".burger").click(function(){
    $("body").toggleClass('active');
  });
  
  $(".menu").click(function(){
      $("body").removeClass("active");
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

  $(window).scroll(function(){
    let section = $(".list-screen-2").offset();
    let wScroll = $(this).scrollTop();
    
    $(".list-screen-2 .leaves__item_1").css({
      'transform': 'translate(0,' + (wScroll - section.top) / 7 + '%)'
    });
    $(".list-screen-2 .leaves__item_2").css({
      'transform': 'translate(0,' + (wScroll - section.top) / 7 + '%)'
    });
    $(".list-screen-2 .leaves__item_3").css({
      'transform': 'translate(0,' + (wScroll - section.top) / 7 + '%)'
    });
    $(".list-screen-2 .leaves__item_4").css({
      'transform': 'translate(0,' + (wScroll - section.top) / 7 + '%)'
    });
    $(".list-screen-2 .leaves__item_5").css({
      'transform': 'translate(0,' + (wScroll - section.top) / 7 + '%)'
    });
    $(".list-screen-2 .leaves__item_6").css({
      'transform': 'translate(0,' + (wScroll - section.top) / 7 + '%)'
    });
    $(".list-screen-2 .leaves__item_7").css({
      'transform': 'translate(0,' + (wScroll - section.top) / 7 + '%)'
    });
    $(".list-screen-2 .leaves__item_8").css({
      'transform': 'translate(0,' + (wScroll - section.top) / 7 + '%)'
    });
  });
  
});

