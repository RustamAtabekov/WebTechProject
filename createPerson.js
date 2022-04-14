let personName;
let personProfession;
let personComment;

function saveComment() {
  personName = document.querySelector("#personName").value;
  personProfession = document.querySelector("#personProfession").value;
  personComment = document.querySelector("#personComment").value;
}

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
