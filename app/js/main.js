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

  });
/*   $('.partner-slider').slick({
 //fix scroll jump when click dots
 autoplay:true,
 infinite: true,
 slidesToShow: 4,



  }); */

  $('.partner-slider').slick({
    autoplay:true,
    accessibility: 'false',
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]//fix scroll jump when click dots
  })
})
