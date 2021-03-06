
document.addEventListener("turbolinks:load", function() {
  docReadyJS();
})
//on page load
var docReadyJS = function() {
  //when document is ready
$(document).ready(function(){
  //prepare landing page slider
  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
    }); 
  $('.single-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });

  if($(window).width() < 700) {
    $(".dropup").addClass("dropdown").removeClass("dropup");
     $(".dropdown-menu").css("width", "inherit");
    return false;
  };

  })
}
  