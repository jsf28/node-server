/*Empieza index-webpage*/
/*Empieza navbar-section*/
$(document).ready(function(){
    $(".nav-bar li").hover(function(){
        $(this).css("background-color", "#FF3333");
        }, function(){
        $(this).css("background-color", "#990000");
    });
});
/*Empieza slide-photo*/
$(function(){
  setInterval(function(){
  $(".slide-photo ul").animate({marginLeft:"-1100px"},1100, function(){
    $(".slide-photo ul li:last").after($(".slide-photo ul li:first"));
    $(this).css("margin-left","0");
});
},5000);
});
/*Empieza third-section*/
$(function(){
  $(".third-link h6").hide();
    $("button").click(function(){
      $(".third-link h6").fadeIn();
    });
  });
/*Empieza sobrenosotros-webpage*/
/*Empieza accordion-section*/
$(function(){
  $(".accordion-content p").hide();
  $(".accordion-content h4").click(function(){
    $(".accordion-content p").hide();
    $(this).next().slideDown(1000);
  });
});
/*Empieza basesdatos-webpage*/
$(function(){
  $(".basesdatos-info h4").toggle().slideDown(1000);
  $(".basesdatos-info h5").toggle().fadeIn(3000);
});
