$(document).ready(function(){

  // Add and remove sticky navigation class
    
   $('.js-section-feature').waypoint(function(direction){
      if(direction =="down"){

        $('nav').addClass('sticky');

      }else{
        $('nav').removeClass('sticky');
      }

   }, {offset: '20%'
  });

  // onclick scroll to plans section
    
  $('.js-scroll-to-plans').click(function(){

    $('html,body').animate({scrollTop:$('.js-section-plans').offset().top},1000);

  });
  
  
// onclick scroll to features section

  $('.js-scroll-to-feature').click(function(){

    $('html,body').animate({scrollTop:$('.js-section-feature').offset().top},1000);

  });
  
  
// onclick scroll to features section

  $('.js-scroll-to-food').click(function(){

    $('html,body').animate({scrollTop:$('.js-section-feature').offset().top},1000);

  });  
   
  
  // scroll to how it works section

  $('.js-scroll-to-how-it-works').click(function(){

    $('html,body').animate({scrollTop:$('.js-how-it-works-section').offset().top},1000);

  });

  // scroll to our cities section

  $('.js-scroll-to-city-section').click(function(){

    $('html,body').animate({scrollTop:$('.js-cities-section').offset().top},1000);

  });
  
  
  // scroll sign up form section
  
  $('.js-scroll-to-sign-up').click(function(){

    $('html,body').animate({scrollTop:$('.js-form').offset().top},1000);

  });
  
    
});

