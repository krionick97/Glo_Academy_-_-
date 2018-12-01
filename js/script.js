$(document).ready( function(){

  $('.button-callback').click(function() {
    $('.modal').addClass('modal_visible');
  });
  
  $('.modal__close').click(function() {
    $('.modal').removeClass('modal_visible');
  });
  
  // $(".js-close-modal").click(function(){
  //   $(".modal").removeClass("visible");
  // });
  
  // $('modal__dialog').click(function(event) {
  //   //if you click on anything except the modal itself or the "open modal" link, close the modal
  //   if (!$(event.target).closest('.modal__dialog').length) {
  //     // $('body').find('.modal').removeClass('modal_visible');
  //     $('.modal__dialog').removeClass('modal_visible');
  //   }
  // });

  $('.portfolio__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow_right"></div>',    
    prevArrow: '<div class="arrow arrow_left"></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
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
    ]
   
  }); // слайдер в портфолио


}); // вызов нужных функций скрипта