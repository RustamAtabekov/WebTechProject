// CLICK ON BUTTONS LEFT  SIDE
const $btnLeft = document.querySelector(".btn-left");
const $currentItem = document.querySelector(".current-item");

let items = $currentItem.children;

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

// function saveComment() {
//   personName = document.querySelector("#personName").value;
//   personProfession = document.querySelector("#personProfession").value;
//   personComment = document.querySelector("#personComment").value;
// }
