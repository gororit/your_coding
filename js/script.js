$(function(){ 
$('a[href^="#"]:not([href="#"])').click(function(){
 var target=$($(this).attr("href")).offset().top;
 target -= 94;
$("html,body").animate({scrollTop:target},500);

 return false;
});

$('.logo').click(function(){
$('html,body').animate({scrollTop:0},500);
});

$('.accordion').click(function(){
var $answer=$(this).find('.faq-a');
$answer.slideToggle();
});

$('.ham').on('click', function(){
 $('.menu').toggleClass('is-active');
 $('.ham').toggleClass('clicked');
});

$('.menu__item a[href]').on('click', function(){
 $('.menu').toggleClass('is-active');
 $('.ham').toggleClass('clicked');
});

var mySwiper = new Swiper('.swiper-container', {
 slidesPerView:1.5,
 loop: true,
 loopedSlides: 5,
 spaceBetween:59,
 centeredSlides:true,

 autoplay:{
  delay:5000,
  disableOnInteraction:false,
 },

 breakpoints:{
  1000:{
   slidesPerView:3.5,
  },

  768:{
  slidesPerView:2,
  }
 }
});

$('.send').prop("disabled", true);

$('form input:required').change(function () {
    //必須項目が空かどうかフラグ
    let flag = true;
    //必須項目をひとつずつチェック
    $('form input:required').each(function(e) {
        //もし必須項目が空なら
        if ($('form input:required').eq(e).val() === "") {
            flag = false;
        }
    });
    //全て埋まっていたら
    if (flag) {
        //送信ボタンを復活
        $('.send').prop("disabled", false);
    }
    else {
        //送信ボタンを閉じる
        $('.send').prop("disabled", true);
    }
});

$('form').submit(function(){
$('input[type="submit"]').css('display','none');
});

function postToGoogle() {
 var name = $('#name').val();
 var email = $('#email').val();
 var contact = $('#contact').val();

 $.ajax({
 url: "https://docs.google.com/forms/d/[key]/formResponse",
 data: {"entry.1172291683": name,"entry.1836052057":email,"entry.1600331024":contact},
 type: "POST",
 dataType: "xml",
 statusCode: {
     0: function() {
         //Success message
         location.href="#"
     },
     200: function() {
         //Success Message
         location.href="#"
     }
 }
});
}
});
