const sliderItems = document.querySelectorAll(".slide-item.desktop");
const sliderContentItems = document.querySelectorAll(".description");
const Slide = document.getElementsByClassName(".slick-slide.slick-current.slick-active")

// slick-slide slick-current slick-active

sliderItems.forEach((item) => {
  item.addEventListener("click", () => {
    const activeItem = document.querySelector(".slide-item.desktop.active");

    activeItem.classList.remove("active");
    item.classList.add("active");

    const activeContentItem = document.querySelector(".description.active");
    activeContentItem.classList.remove("active");
    document
      .getElementById(`content${item.id.slice(-1)}`)
      .classList.add("active");
  });
});






const nav = document.getElementById("navbar-mobile");
const btnNav = document.getElementById("btn-nav-show");

btnNav.addEventListener('click', function(){
  nav.className = nav.className !== 'show' ? 'show' : 'hide';
  if (nav.className === 'show') {
    nav.style.display = 'block';
    window.setTimeout(function(){
      nav.style.opacity = 1;
      nav.style.transform = 'scale(1)';
    },0);
  }
  if (nav.className === 'hide') {
    nav.style.opacity = 0;
    nav.style.transform = 'scale(0)';
    window.setTimeout(function(){
      nav.style.display = 'none';
    },700); // timed to match animation-duration
  }
 
});

