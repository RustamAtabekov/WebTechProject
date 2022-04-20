// access to buttons of slider left and right
const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");
// access to elements of collection slides
const $currentItem = document.querySelector(".current-item");
const items = $currentItem.children;
// assign position to first slide
let i = 0;

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

// SLIDER ARROW RIGHT
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

// function saveComment() {
//   personName = document.querySelector("#personName").value;
//   personProfession = document.querySelector("#personProfession").value;
//   personComment = document.querySelector("#personComment").value;
// }
