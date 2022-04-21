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

// get LIKE element
const $like = document.querySelector(".like");
let imgLike = $like.children;

// get sum(counter) LIKES
const sumLikes = document.querySelector("#sum-likes");
sumLikes.children;

// set initial amount of counter LIKES
let counterLikes = 0;
sumLikes.innerHTML = counterLikes;

// increase or decrease LIKES by pressing buttons
$like.addEventListener("click", function () {
  let i = 0;
  if (
    imgLike[i].src.includes("pictures/testimonials/like-off.jpg") &&
    imgDislike[i].src.includes("pictures/testimonials/dislike-off.jpg")
  ) {
    imgLike[i].src = "pictures/testimonials/like-on.jpg";
    sumLikes.innerHTML = ++counterLikes;
  } else if (
    imgLike[i].src.includes("pictures/testimonials/like-off.jpg") &&
    imgDislike[i].src.includes("pictures/testimonials/dislike-on.jpg")
  ) {
    imgLike[i].src = "pictures/testimonials/like-on.jpg";
    sumLikes.innerHTML = ++counterLikes;
    imgDislike[i].src = "pictures/testimonials/dislike-off.jpg";
    sumDislikes.innerHTML = --counterDislikes;
  } else {
    imgLike[i].src = "pictures/testimonials/like-off.jpg";
    sumLikes.innerHTML = --counterLikes;
  }
});

// get DISLIKE element
const $dislike = document.querySelector(".dislike");
let imgDislike = $dislike.children;

// get sum(counter) DISLIKES
const sumDislikes = document.querySelector("#sum-dislikes");
sumDislikes.children;

// set initial amount of counter DISLIKES
let counterDislikes = 0;
sumDislikes.innerHTML = counterDislikes;

// increase or decrease DISLIKES by pressing buttons
$dislike.addEventListener("click", function () {
  let i = 0;
  if (
    imgDislike[i].src.includes("pictures/testimonials/dislike-off.jpg") &&
    imgLike[i].src.includes("pictures/testimonials/like-off.jpg")
  ) {
    imgDislike[i].src = "pictures/testimonials/dislike-on.jpg";
    sumDislikes.innerHTML = ++counterDislikes;
  } else if (
    imgDislike[i].src.includes("pictures/testimonials/dislike-off.jpg") &&
    imgLike[i].src.includes("pictures/testimonials/like-on")
  ) {
    imgDislike[i].src = "pictures/testimonials/dislike-on.jpg";
    sumDislikes.innerHTML = ++counterDislikes;
    imgLike[i].src = "pictures/testimonials/like-off.jpg";
    sumLikes.innerHTML = --counterLikes;
  } else {
    imgDislike[i].src = "pictures/testimonials/dislike-off.jpg";
    sumDislikes.innerHTML = --counterDislikes;
  }
});
