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
const animationImages = document.querySelectorAll('.animation > img');
const BIRD01_IMAGES = document.querySelectorAll('.birds_item_wrap.bird_01 .animation > img');
const BIRD02_IMAGES = document.querySelectorAll('.birds_item_wrap.bird_02 .animation > img');
const BIRD02_VIDEO = document.querySelectorAll('.birds_item_wrap.bird_02 .animation > video');
const BIRD03_IMAGES = document.querySelectorAll('.birds_item_wrap.bird_03 .animation > img');
const BIRD04_IMAGES = document.querySelectorAll('.birds_item_wrap.bird_04 .animation > img');
const BIRD05_IMAGES = document.querySelectorAll('.birds_item_wrap.bird_05 .animation > img');

window.addEventListener('mousemove', function(e){
  x = e.pageX - this.window.innerWidth / 2;
  y = e.pageY - this.window.innerHeight / 2;
});

const loop = () => {

  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  introImages[1].style.transform = `translateX(${targetX / 40}px) translateY(${targetY / 60}px)`;
  introImages[2].style.transform = `translateX(${-targetX / 60}px)`;

  // bird_01 images
  BIRD01_IMAGES[0].style.transform = `translateX(${-targetX / 64}px) translateY(${targetY / 33}px)`;
  BIRD01_IMAGES[1].style.transform = `translateX(${targetX / 32}px) translateY(${-targetY / 48}px)`;
  BIRD01_IMAGES[2].style.transform = `translateX(${-targetX / 55}px) translateY(${targetY / 36}px)`;
  BIRD01_IMAGES[3].style.transform = `translateX(${targetX / 34}px) translateY(${-targetY / 46}px)`;
  BIRD01_IMAGES[4].style.transform = `translateX(${-targetX / 43}px) translateY(${targetY / 65}px)`;
  BIRD01_IMAGES[5].style.transform = `translateX(${targetX / 75}px) translateY(${-targetY / 41}px)`;

  // bird_02 images
  BIRD02_IMAGES[0].style.transform = `translateX(${-targetX / 64}px) translateY(${targetY / 33}px)`;
  BIRD02_IMAGES[1].style.transform = `translateX(${targetX / 32}px) translateY(${-targetY / 48}px)`;
  BIRD02_IMAGES[2].style.transform = `translateX(${-targetX / 55}px) translateY(${targetY / 36}px)`;
  BIRD02_IMAGES[3].style.transform = `translateX(${targetX / 34}px) translateY(${-targetY / 46}px)`;
  BIRD02_IMAGES[4].style.transform = `translateX(${-targetX / 43}px) translateY(${targetY / 65}px)`;
  BIRD02_IMAGES[5].style.transform = `translateX(${targetX / 75}px) translateY(${-targetY / 41}px)`;

  // bird_02 video
  BIRD02_VIDEO[0].style.transform = `translateX(${-targetX / 56 }px) translateY(${-targetY / 76}px)`;

  //bird_03 images
  BIRD03_IMAGES[0].style.transform = `translateX(${-targetX / 64}px) translateY(${targetY / 133}px)`;
  BIRD03_IMAGES[1].style.transform = `translateX(${targetX / 132}px) translateY(${-targetY / 148}px)`;
  BIRD03_IMAGES[2].style.transform = `translateX(${-targetX / 155}px) translateY(${targetY / 136}px)`;
  BIRD03_IMAGES[3].style.transform = `translateX(${targetX / 234}px) translateY(${-targetY / 66}px)`;
  BIRD03_IMAGES[4].style.transform = `translateX(${-targetX / 143}px) translateY(${targetY / 65}px)`;
  BIRD03_IMAGES[5].style.transform = `translateX(${targetX / 75}px) translateY(${-targetY / 41}px)`;

  // bird 04 images
  BIRD04_IMAGES[0].style.transform = `translateX(${-targetX / 64}px) translateY(${targetY / 133}px)`;
  BIRD04_IMAGES[1].style.transform = `translateX(${targetX / 132}px) translateY(${-targetY / 148}px)`;
  BIRD04_IMAGES[2].style.transform = `translateX(${-targetX / 155}px) translateY(${targetY / 136}px)`;
  BIRD04_IMAGES[3].style.transform = `translateX(${targetX / 234}px) translateY(${-targetY / 66}px)`;
  BIRD04_IMAGES[4].style.transform = `translateX(${-targetX / 143}px) translateY(${targetY / 65}px)`;
  BIRD04_IMAGES[5].style.transform = `translateX(${targetX / 75}px) translateY(${-targetY / 41}px)`;

  // bird 05 images
  BIRD05_IMAGES[0].style.transform = `translateX(${-targetX / 64}px) translateY(${targetY / 133}px)`;
  BIRD05_IMAGES[1].style.transform = `translateX(${targetX / 132}px) translateY(${-targetY / 148}px)`;
  BIRD05_IMAGES[2].style.transform = `translateX(${-targetX / 155}px) translateY(${targetY / 136}px)`;

  window.requestAnimationFrame(loop);

}

loop();

let randomIndexArray = [];
for (let i = 0; i < animationImages.length * 2; i++) {

  

}