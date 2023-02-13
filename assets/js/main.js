const sliderItems = document.querySelectorAll(".slide-item");
const sliderContentItems = document.querySelectorAll(".description");

sliderItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("clicked");
    const activeItem = document.querySelector(".slide-item.active");
    activeItem.classList.remove("active");
    item.classList.add("active");

    const activeContentItem = document.querySelector(
      ".description.active"
    );
    activeContentItem.classList.remove("active");
    document
      .getElementById(`content${item.id.slice(-1)}`)
      .classList.add("active");
  });
});
