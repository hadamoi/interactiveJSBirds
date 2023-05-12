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

// header hide function
function hideTopHeader(){
  const STANDARD = 30;
  const headerTop = document.querySelector('header .top');

  if(window.scrollY > STANDARD){
    headerTop.style.display = 'none';
  }else{
    headerTop.style.display = 'block';
  }
}

window.addEventListener('scroll', hideTopHeader);

// mousemove event function
let x = 0,
    y = 0;

let targetX = 0,
    targetY = 0;

const speed = 0.09;
const introImages = document.querySelectorAll('.bg_images.intro img');
const animationImages = document.querySelectorAll('.animation > img')

window.addEventListener('mousemove', function(e){
  x = e.pageX - this.window.innerWidth / 2;
  y = e.pageY - this.window.innerHeight / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  introImages[1].style.transform = `translateX(${targetX / 40}px) translateY(${targetY / 60}px)`;
  introImages[2].style.transform = `translateX(${-targetX / 60}px)`;

  animationImages[0].style.transform = `translateX(${targetX / 18}px) translateY(${targetY / 36}px)`;
  animationImages[1].style.transform = `translateX(${targetX / 30}px) translateY(${targetY / 27}px)`;
  animationImages[2].style.transform = `translateX(${targetX / 33}px) translateY(${targetY / 7}px)`;
  animationImages[3].style.transform = `translateX(${targetX / 20}px) translateY(${targetY / 10}px)`;
  animationImages[4].style.transform = `translateX(${targetX / 28}px) translateY(${targetY / 31}px)`;
  animationImages[5].style.transform = `translateX(${targetX / 34}px) translateY(${targetY / 19}px)`;



  window.requestAnimationFrame(loop);
}

console.log(animationImages);

loop();

