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

  new WOW().init();

  
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

  $('.js-ajax').on('submit', function() {
    // var fioVal = $('[name = fio]').val(),
    //     phoneVal = $('[name = phone]').val();
    

    // $.ajax({
    //   url: '/send.php',
    //   data: {fio:fioVal, phone:phoneVal},
    //   success: function(){
    //     alert('Your message is sent');
    //   }
    // });
    
    
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: 'mailer/smart.php',
      data: $(this).serialize(), 
    }).done(function(){
      $(this).find("input").val("");
      alert("Message is sent");
      $('form').trigger("reset");
    });

    return false;
  });

  
  document.querySelector('#callback-button').addEventListener('click', function() {
    yaCounter51441350.reachGoal('btn'); return true;
  });
  $('.price-catalog__price-link').click(function() { return false; });
  
}); // вызов нужных функций скрипта