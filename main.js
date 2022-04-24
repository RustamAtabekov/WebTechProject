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

// assign src to const
const likeOn = "pictures/testimonials/like-on.jpg";
const likeOff = "pictures/testimonials/like-off.jpg";
const dislikeOn = "pictures/testimonials/dislike-on.jpg";
const dislikeOff = "pictures/testimonials/dislike-off.jpg";

const likeDislike = document.querySelector(".like-dislike");
let allSrc = likeDislike.children;

let d = allSrc[2];
let l = allSrc[0];
console.log(d.src);
console.log(l.src);
d = dislikeOn;
l = likeOn;
console.log(d);
console.log(l);
