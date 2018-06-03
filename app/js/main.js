$(document).ready(function(){
  console.log('ready');

  $('.testimonial-slider').slick({
    dots: true,
    nextArrow: null,
    prevArrow: null,
    asNavFor: '.bg-slider',
  });

  $('.bg-slider').slick({
    autoplay:false,
    asNavFor: '.testimonial-slider',
  })
})
