/****************** B U T T O N S   L E F T   A N D   R I G H T **************/

// get left and right buttons of slider
const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");

//get all slides of collection
const slides = document.querySelector(".current-slides").children;

// assign position for first slide
let posSlide = 0;

// move slide to left side
$btnLeft.addEventListener("click", function () {
  if (slides[posSlide].classList.contains("show")) {
    slides[posSlide].classList.replace("show", "hide");
    if (posSlide === slides.length - 1) {
      posSlide = 0;
      posSlide--;
    }
    posSlide++;
    slides[posSlide].classList.replace("hide", "show");
  }
});

// move slide to right side
$btnRight.addEventListener("click", function () {
  if (posSlide === 0) {
    slides[posSlide].classList.replace("show", "hide");
    posSlide = slides.length - 1;
    slides[posSlide].classList.replace("hide", "show");
  } else if (posSlide < slides.length) {
    slides[posSlide].classList.replace("show", "hide");
    posSlide--;
    slides[posSlide].classList.replace("hide", "show");
  }
});

/********** L I K E S   A N D  D I S L I K E S ************/

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

    //get sum-likes and sum-dislikes, create counters
    let sumLikes = i.parentElement.querySelector(".sum-likes");
    let counterLikes = Number(sumLikes.innerHTML);
    let sumDislikes = i.parentElement.querySelector(".sum-dislikes");
    let counterDislikes = Number(sumDislikes.innerHTML);

    // checking, set src and compute counters
    if (
      event.target.getAttribute("src") === likeOff &&
      currentDisSrc === dislikeOn
    ) {
      event.target.setAttribute("src", likeOn);
      i.parentElement.querySelector(".dof").setAttribute("src", dislikeOff);
      sumLikes.innerHTML = counterLikes + 1;
      sumDislikes.innerHTML = counterDislikes - 1;
    } else if (event.target.getAttribute("src") === likeOff) {
      event.target.setAttribute("src", likeOn);
      sumLikes.innerHTML = counterLikes + 1;
    } else {
      event.target.setAttribute("src", likeOff);
      sumLikes.innerHTML = counterLikes - 1;
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

    //get sum-likes and sum-dislikes, create counters
    let sumDislikes = i.parentElement.querySelector(".sum-dislikes");
    let counterDislikes = Number(sumDislikes.innerHTML);
    let sumLikes = i.parentElement.querySelector(".sum-likes");
    let counterLikes = Number(sumLikes.innerHTML);

    // checking, set src and compute counters
    if (
      event.target.getAttribute("src") === dislikeOff &&
      currentLikeSrc === likeOn
    ) {
      event.target.setAttribute("src", dislikeOn);
      i.parentElement.querySelector(".lof").setAttribute("src", likeOff);
      sumDislikes.innerHTML = counterDislikes + 1;
      sumLikes.innerHTML = counterLikes - 1;
    } else if (event.target.getAttribute("src") === dislikeOff) {
      event.target.setAttribute("src", dislikeOn);
      sumDislikes.innerHTML = counterDislikes + 1;
    } else {
      event.target.setAttribute("src", dislikeOff);
      sumDislikes.innerHTML = counterDislikes - 1;
    }
  });
}

/********* B U T T O N S  C O M M E N T S,  A D D  and  R E M O V E *********/

const commentButtons = document.querySelector(".comment-buttons").children;
const btnAddComment = commentButtons[0];
console.log(btnAddComment);

const form = document.querySelector(".form");
console.log(form);

btnAddComment.addEventListener("click", function (event) {
  if (form.classList.contains("hide-form")) {
    form.classList.remove("hide-form");
    form.classList.add("show-form");
  }
});
