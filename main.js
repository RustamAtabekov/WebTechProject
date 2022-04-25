// get left and right buttons of slider
const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");

//get all slides of collection
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

// get collection images likes and dislikes
let lofCol = document.getElementsByClassName("lof");
let dofCol = document.getElementsByClassName("dof");

// short names src
const likeOn = "pictures/testimonials/like-on.jpg";
const likeOff = "pictures/testimonials/like-off.jpg";
const dislikeOn = "pictures/testimonials/dislike-on.jpg";
const dislikeOff = "pictures/testimonials/dislike-off.jpg";

// add Listener for Likes and change it depending on Dislikes
for (let i of lofCol) {
  i.addEventListener("click", function (event) {
    //get current position src of Dislike
    let currentDisSrc = i.parentElement
      .querySelector(".dof")
      .getAttribute("src");
    // checking and set src
    if (
      event.target.getAttribute("src") === likeOff &&
      currentDisSrc === dislikeOn
    ) {
      event.target.setAttribute("src", likeOn);
      i.parentElement.querySelector(".dof").setAttribute("src", dislikeOff);
    } else if (event.target.getAttribute("src") === likeOff) {
      event.target.setAttribute("src", likeOn);
    } else {
      event.target.setAttribute("src", likeOff);
    }
  });
}

// add Listener for Dislike and change it depending on Like
for (let i of dofCol) {
  i.addEventListener("click", function (event) {
    // get current position src of Like
    let currentLikeSrc = i.parentElement
      .querySelector(".lof")
      .getAttribute("src");
    // checking and set src
    if (
      event.target.getAttribute("src") === dislikeOff &&
      currentLikeSrc === likeOn
    ) {
      event.target.setAttribute("src", dislikeOn);
      i.parentElement.querySelector(".lof").setAttribute("src", likeOff);
    } else if (event.target.getAttribute("src") === dislikeOff) {
      event.target.setAttribute("src", dislikeOn);
    } else {
      event.target.setAttribute("src", dislikeOff);
    }
  });
}
