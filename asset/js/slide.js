$(document).ready(function(){
    $('.slide-city').slick({
    slidesToShow: 6,
    dots:true,
    centerMode: true,
    slidesToScroll: 1,
    arrows : false,
    swipeToSlide:true,
    dots:false,
    
    responsive: [{
  
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1,
        }
  
      }, {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
        }
      },
      {
  
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 1,
        }
  
      }]
    });
  });

//   $(".slide-city").slick({

//     // normal options...
//     infinite: false,
  
//     // the magic
//     responsive: [{
  
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           infinite: true
//         }
  
//       }, {
  
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           dots: true
//         }
  
//       }, {
  
//         breakpoint: 300,
//         settings: "unslick" // destroys slick
  
//       }]
//   });
  