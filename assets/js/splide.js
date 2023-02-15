document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 4,
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      640: {
        perPage: 2,
      },
    },
  }).mount(window.splide.Extensions);
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel2", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 3,
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 0.5,
    },
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  }).mount(window.splide.Extensions);
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel3", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 3,
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: -0.5,
    },
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  }).mount(window.splide.Extensions);
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel4", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 4,
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 0.5,
    },
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  }).mount(window.splide.Extensions);
});
