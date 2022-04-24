// get left and right buttons of slider
const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");

//get all elements of collection slides
const $currentItems = document.querySelector(".current-items");
const slideItems = $currentItems.children;

// assign position for first slide
let i = 0;

// move slide to left side
$btnLeft.addEventListener("click", function () {
  if (slideItems[i].classList.contains("show")) {
    slideItems[i].classList.replace("show", "hide");
    if (i == slideItems.length - 1) {
      i = 0;
      i--;
    }
    i++;
    slideItems[i].classList.replace("hide", "show");
  }
});

// move slide to right side
$btnRight.addEventListener("click", function () {
  if (i == 0) {
    slideItems[i].classList.replace("show", "hide");
    i = slideItems.length - 1;
    slideItems[i].classList.replace("hide", "show");
  } else if (i < slideItems.length) {
    slideItems[i].classList.replace("show", "hide");
    i--;
    slideItems[i].classList.replace("hide", "show");
  }
});
