$('header .bottom .info').mouseenter(function(){
  $(this).toggleClass('active');
})

$('header .top .xi-search').click(function(){
  $('header .top .gnb .search').toggleClass('active');
})

$('header .bottom .share span').click(function(){
  $('header .bottom .share').toggleClass('active');
})

$('header .top .xi-bars').click(function(){
  $('header .top nav').addClass('active');
  $('header .top .overlay').fadeIn();
})

$('header .top .overlay').click(function(){
  $('header .top nav').removeClass('active');
  $('header .top .overlay').fadeOut();
})

$('header .top nav > ul > li').mouseenter(function(){
  $(this).children('.nav_list').css('display','block');
  $(this).siblings('li').children('.nav_list').css('display','none');
})

$('header .top nav > ul > li').mouseleave(function(){
  $(this).children('.nav_list').css('display','none');
})
