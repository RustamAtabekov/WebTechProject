// CLICK ON BUTTONS LEFT AND RIGHTS
const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");

const personName = document.querySelector(".input-name").value;
const personProfession = $btnLeft.addEventListener("click", function () {
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
