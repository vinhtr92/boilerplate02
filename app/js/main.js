$(document).ready(function(){
  $('.testimonial-slider').slick({
    dots: true,
    nextArrow: null,
    prevArrow: null,
    asNavFor: '.bg-slider',
    accessibility: 'false',//fix scroll jump when click dots

  });

  $('.bg-slider').slick({
    autoplay:false,
    asNavFor: '.testimonial-slider',
    accessibility: 'false',//fix scroll jump when click dots

  })
})
