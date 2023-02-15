$("#slick1").slick({
  autoplay: false,
  rows: 2,
  dots: false,
  arrows: true,
  infinite: true,
  loop: true,
  speed: 300,
  prevArrow:
    "<img class='a-left control-c prev slick-prev' src='/assets/images/icons/previous.svg'>",
  nextArrow:
    "<img class='a-right control-c next slick-next' src='/assets/images/icons/next.svg'>",
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        mobileFirst: true,
        rows: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//UPDATED 
$('#slick1').on('afterChange', function(event, slick, currentSlide, nextSlide){   
  $('.description').hide();
  $('.description[data-id=' + (currentSlide + 1) + ']').show();
});

$("#slick3").slick({
  autoplay: false,
  rows: 2,
  dots: false,
  arrows: true,
  infinite: true,
  loop: true,
  speed: 300,
  prevArrow:
    "<img class='a-left control-c prev slick-prev' src='/assets/images/icons/previous.svg'>",
  nextArrow:
    "<img class='a-right control-c next slick-next' src='/assets/images/icons/next.svg'>",
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        mobileFirst: true,
        rows: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


$("#slick2").slick({
  rows: 2,
  dots: false,
  arrows: true,
  infinite: true,
  loop: true,
  speed: 300,
  prevArrow:
    "<img class='a-left control-c prev slick-prev' src='/assets/images/icons/previous.svg'>",
  nextArrow:
    "<img class='a-right control-c next slick-next' src='/assets/images/icons/next.svg'>",
  slidesToShow: 2,
  slidesToScroll: 2,
});
