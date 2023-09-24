$(function(){
      $('.total_list').hover(function(){
        $('.sub_nav').stop().fadeIn(300);
      }, function(){
        $('.sub_nav').stop().fadeOut(300);
      });
    });