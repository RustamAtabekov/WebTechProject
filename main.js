// CLICK ON BUTTONS LEFT AND RIGHTS
const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");

let personName;
let personProfession;
let personComment;

export function saveComment() {
  personName = document.querySelector("#personName").value;
  personProfession = document.querySelector("#personProfession").value;
  personComment = document.querySelector("#personComment").value;
}

$btnLeft.addEventListener("click", function () {
  const $currentItem = document.querySelector(".current-item");
  $currentItem.innerHTML = `<div class="item">
                <picture">
                  <img src="pictures/testimonials/" alt="picture" />
                </picture>
                <p>
                  ${personComment}
                </p>
                <figcaption>
                  <p class="name-person">${personName}</p>
                  <p class="profession">${personProfession}</p>
                </figcaption>
              </div>`;
});

$btnRight.addEventListener("click", function () {
  const $currentItem = document.querySelector(".current-item");
  $currentItem.innerHTML = `<div class="item">
                <picture">
                  <img src="pictures/testimonials/" alt="picture" />
                </picture>
                <p>
                  ${personComment}
                </p>
                <figcaption>
                  <p class="name-person">${personName}</p>
                  <p class="profession">${personProfession}</p>
                </figcaption>
              </div>`;
});
