$(document).ready(function(){
  $("a.scrollTo").click(function(){
    event.preventDefault();
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top},500);
  });
});

