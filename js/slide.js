function prev (){
      $('.sliderWrap > li:last').prependTo('.sliderWrap');
      $('.sliderWrap').css("margin-left","-1920px");
      $('.sliderWrap').stop().animate({marginLeft : "0"},800);
    }

    function next (){
      $('.sliderWrap').stop().animate({marginLeft : "-1920px"}, function(){
        $('.sliderWrap > li:first').appendTo('.sliderWrap');
        $('.sliderWrap').css('margin-left',"0");
      });
      
    }
    $(function(){
      $('.prev').click(function(){
        prev();
      });
    });
    $(function(){
      $('.next').click(function(){
        next();
      });
    });

    setInterval(next, 3000);


    /**priemium slide**/

    function P_prev (){
      $('.P_sliderWrap > li:last').prependTo('.P_sliderWrap');
      $('.P_sliderWrap').css("margin-left","-600px");
      $('.P_sliderWrap').stop().animate({marginLeft : "0"},800);
    }

function P_slider (){
$('.P_sliderWrap').stop().animate({marginLeft: "-600px"}, function(){
  $('.P_sliderWrap > li:first').appendTo('.P_sliderWrap');
  $('.P_sliderWrap').css("margin-left","0");
});
}

setInterval(P_slider, 3000);
$(function(){
  $('.P_prev').click(function(){
    P_prev();
  });
});
$(function(){
  $('.P_next').click(function(){
    P_slider();
  });
});


