var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Number of slides per view
    spaceBetween: 30, // Space between slides
    loop: true, // Infinite loop mode
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    autoplay: {
      delay: 3000, // Autoplay delay in milliseconds
      disableOnInteraction: false // Disable autoplay on user interaction
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 576px
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: false,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 992px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    on: {
      init: function () {
        adjustScrollbar();
      },
      resize: function () {
        adjustScrollbar();
      },
      slideChangeTransitionEnd: function () {
        adjustScrollbar();
      }
    }
  });

  function adjustScrollbar() {
    var slidesPerView = swiper.params.slidesPerView;
    var swiperWidth = swiper.width;
    var totalSlides = swiper.slides.length;
    var scrollbarWidth = (swiperWidth / totalSlides) * slidesPerView;
    var scrollbarHeight = 11; // Height of the scrollbar

    var scrollbarEl = document.querySelector('.swiper-scrollbar');
    var scrollbarDragEl = document.querySelector('.swiper-scrollbar-drag');

    scrollbarEl.style.width = scrollbarWidth + 'px';
    scrollbarEl.style.height = scrollbarHeight + 'px';

    scrollbarDragEl.style.width = (scrollbarWidth / swiperWidth) * 100 + '%';
    scrollbarDragEl.style.height = '100%';
  }