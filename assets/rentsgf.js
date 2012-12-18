$(document).ready(function(){
  
  $('#nav a').click(function(){
    var scrollToId = $(this).attr('href');
    var offset = $(scrollToId).offset();
    $('body').animate({scrollTop: offset.top-50}, 300);
    return false;
  });
  
  $(window).scroll(function(){
    var wo = (window.scrollY) ? window.scrollY : document.documentElement.scrollTop;
    var $nav = $('#nav');
    if(wo >= 424 ){
      $nav.addClass('fixed');
      $('#hero').css('marginBottom',$nav.outerHeight()+25);
    } else {
      $("#nav").removeClass('fixed');
      $('#hero').css('marginBottom','0');
    }
  });
  
  $('#gallery .thumb').each(function(){
    var thumb = $(this).data('thumb');
    var image = thumb.replace('_.jpg','.jpg').replace('thumbs','fullsize');
    var title = $(this).data('title');
    $(this).css('background','url('+thumb+')');
    $(this).html('<a href="'+image+'" rel="pop" title="'+title+'"></a>');
  });
  
  $("a[rel='pop']").colorbox();
  $(".video").colorbox({iframe:true, innerWidth:640, innerHeight:360});
  
});