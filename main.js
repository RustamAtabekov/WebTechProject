// get left and right buttons of slider
const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");

//get all elements of collection slides
const $currentItems = document.querySelector(".current-items");
const slideItems = $currentItems.children;

// assign position for the first slide
let i = 0;

// add Listener to the left-button and move slides to left side
$btnLeft.addEventListener("click", function () {
  if (slideItems[i].classList.contains("show")) {
    slideItems[i].classList.remove("show");
    slideItems[i].classList.add("hide");
    if (i == slideItems.length - 1) {
      i = 0;
      i--;
    }
    i++;
    slideItems[i].classList.remove("hide");
    slideItems[i].classList.add("show");
  }
});

// add Listener to the right-button and move slides to right side
$btnRight.addEventListener("click", function () {
  if (i == 0) {
    slideItems[i].classList.remove("show");
    slideItems[i].classList.add("hide");
    i = slideItems.length - 1;
    slideItems[i].classList.remove("hide");
    slideItems[i].classList.add("show");
  } else if (i < slideItems.length) {
    slideItems[i].classList.remove("show");
    slideItems[i].classList.add("hide");
    i--;
    slideItems[i].classList.remove("hide");
    slideItems[i].classList.add("show");
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
let dislikeElements = document.querySelectorAll(".dislike");
let dof = document.querySelectorAll(".dof");

likeElements.forEach(function (item) {
  item.addEventListener("click", function () {
    let disSrc = document.querySelector(".dof").getAttribute("src");
    if (item.src === likeOff && disSrc === dislikeOn) {
      console.log(disSrc);
      item.querySelector("img").src = likeOn;
      item.src = likeOn;
      disSrc = document.querySelector(".dof").src = dislikeOff;
      console.log(disSrc);
    } else if (item.src === likeOff) {
      item.querySelector("img").src = likeOn;
      item.src = likeOn;
    } else {
      item.querySelector("img").src = likeOff;
      item.src = likeOff;
    }
  });
});

// DISLIKES

dislikeElements.forEach(function (item) {
  item.addEventListener("click", function () {
    let likeSrc = document.querySelector(".lof").getAttribute("src");
    if (item.src === dislikeOff && likeSrc === likeOn) {
      console.log(likeSrc);
      item.querySelector("img").src = dislikeOn;
      item.src = dislikeOn;
      likeSrc = document.querySelector(".lof").src = likeOff;
      console.log(likeSrc);
    } else if (item.src === dislikeOff) {
      item.querySelector("img").src = dislikeOn;
      item.src = dislikeOn;
    } else {
      item.querySelector("img").src = dislikeOff;
      item.src = dislikeOff;
    }
  });
});
