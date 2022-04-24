// get left and right buttons of slider
const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");

//get all elements of collection slides
const slides = document.querySelector(".current-slides").children;

// assign position for first slide
let i = 0;

// move slide to left side
$btnLeft.addEventListener("click", function () {
  if (slides[i].classList.contains("show")) {
    slides[i].classList.replace("show", "hide");
    if (i == slides.length - 1) {
      i = 0;
      i--;
    }
    i++;
    slides[i].classList.replace("hide", "show");
  }
});

// move slide to right side
$btnRight.addEventListener("click", function () {
  if (i == 0) {
    slides[i].classList.replace("show", "hide");
    i = slides.length - 1;
    slides[i].classList.replace("hide", "show");
  } else if (i < slides.length) {
    slides[i].classList.replace("show", "hide");
    i--;
    slides[i].classList.replace("hide", "show");
  }
});

// short name src
const likeOn = "pictures/testimonials/like-on.jpg";
const likeOff = "pictures/testimonials/like-off.jpg";
const dislikeOn = "pictures/testimonials/dislike-on.jpg";
const dislikeOff = "pictures/testimonials/dislike-off.jpg";

const likeDislike = document.querySelectorAll(".current-slides");

let lofCol = document.querySelectorAll(".lof");
let dofCol = document.querySelectorAll(".dof");

lofCol.forEach(function (item) {
  item.addEventListener("click", function () {
    let likeSrc = item.getAttribute("src");
    let disSrc = document.querySelector(".dof").getAttribute("src");

    if (likeSrc === likeOff && disSrc === dislikeOn) {
      item.src = likeOn;
      disSrc = document.querySelector(".dof").setAttribute("src", dislikeOff);
    } else if (likeSrc === likeOff) {
      item.src = likeOn;
    } else {
      item.src = likeOff;
    }
  });
});

dofCol.forEach(function (item) {
  item.addEventListener("click", function () {
    let disSrc = item.getAttribute("src");
    let likeSrc = document.querySelector(".lof").getAttribute("src");

    if (disSrc === dislikeOff && likeSrc === likeOn) {
      item.src = dislikeOn;
      likeSrc = document.querySelector(".lof").setAttribute("src", likeOff);
    } else if (disSrc === dislikeOff) {
      item.src = dislikeOn;
    } else {
      item.src = dislikeOff;
    }
  });
});
