$(document).ready(function(){
  var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
            delay: 3000,
            disableOnInteraction: false
  },
 });

 var mySwiper = new Swiper('.rewiew .swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination-text',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    })

 $('.header').on('click', '.menu-button', function(){
$('.header').toggleClass('menu-opened');

});
//Anchor links
    $( ".js-anchor" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    });
});