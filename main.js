// get left and right buttons of slider
const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");

//get all elements of collection slides
const $currentItems = document.querySelector(".current-items");
const items = $currentItems.children;

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

//
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//

//
//
//
//
// likes and dislikes src values for images
const likeOn = "pictures/testimonials/like-on.jpg";
const likeOff = "pictures/testimonials/like-off.jpg";
const dislikeOn = "pictures/testimonials/dislike-on.jpg";
const dislikeOff = "pictures/testimonials/dislike-off.jpg";
//
//
//
// LIKES

let likeElements = document.querySelectorAll(".like");

likeElements.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.src === likeOff) {
      item.querySelector("img").src = likeOn;
      item.src = likeOn;
    } else {
      item.querySelector("img").src = likeOff;
      item.src = likeOff;
    }
  });
});

//
//
//
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//

// DISLIKES

let dislikeElements = document.querySelectorAll(".dislike");
dislikeElements.forEach(function (item) {
  item.addEventListener("click", function () {
    item.src = item.querySelector("img").getAttribute("src");
    if (item.src === "pictures/testimonials/dislike-off.jpg") {
      item.querySelector("img").src = dislikeOn;
      item.src = dislikeOn;
    } else {
      item.querySelector("img").src = dislikeOff;
      item.src = dislikeOff;
    }
  });
});
