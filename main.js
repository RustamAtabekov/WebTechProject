// access to left and right buttons of slider
const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");

// access to all elements of collection slides and current item
const $currentItem = document.querySelector(".current-item");
const items = $currentItem.children;

// assign position for the first slide
let i = 0;

// add Listener to the left-button and move slides to left side
$btnLeft.addEventListener("click", function () {
  if (items[i].classList.contains("show")) {
    items[i].classList.remove("show");
    items[i].classList.add("hide");
    if (i == items.length - 1) {
      i = 0;
      i--;
    }
    i++;
    items[i].classList.remove("hide");
    items[i].classList.add("show");
  }
});

// add Listener to the right-button and move slides to right side
$btnRight.addEventListener("click", function () {
  if (i == 0) {
    items[i].classList.remove("show");
    items[i].classList.add("hide");
    i = items.length - 1;
    items[i].classList.remove("hide");
    items[i].classList.add("show");
  } else if (i < items.length) {
    items[i].classList.remove("show");
    items[i].classList.add("hide");
    i--;
    items[i].classList.remove("hide");
    items[i].classList.add("show");
  }
});

// access to like element
const $like = document.querySelector(".like");
let imgLike = $like.children;

$like.addEventListener("click", function () {
  let i = 0;
  imgLike[i].src = "pictures/testimonials/like-on.jpg";
});
