$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

$(document).ready(function(){

    var mainNav = $('#nav-bar');
    var mainNavScroll = 'nav-bar-scrolled';
    var headerHeight = $('#header').outerHeight();
    console.log(headerHeight)

    $('#nav-bar li a').click(function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function(){
        // console.log($(this).scrollTop());
        if($(this).scrollTop() > headerHeight){
            mainNav.addClass(mainNavScroll);
        }else{
            mainNav.removeClass(mainNavScroll)
        }
    });
});