/****************** B U T T O N S   L E F T   A N D   R I G H T **************/

// GET LEFT AND RIGHT BUTTONS OF SLIDER
const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");

// GET ALL SLIDES OF COLLECTION
const slides = document.querySelector(".current-slides").children;

// ASSIGN POSITION FOR FIRST SLIDE
let posSlide = 0;

// MOVE SLIDE TO LEFT SIDE
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

// MOVE SLIDE TO RIGHT SIDE
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

// GET COLLECTION IMAGES LIKES AND DISLIKES
let lofCol = document.getElementsByClassName("lof");
let dofCol = document.getElementsByClassName("dof");

// SHORT NAMES SRC
const likeOn = "pictures/testimonials/like-on.jpg";
const likeOff = "pictures/testimonials/like-off.jpg";
const dislikeOn = "pictures/testimonials/dislike-on.jpg";
const dislikeOff = "pictures/testimonials/dislike-off.jpg";

// ADD LISTENER FOR LIKES AND CHANGE IT DEPENDING ON DISLIKES
for (let i of lofCol) {
  i.addEventListener("click", function (event) {
    // GET CURRENT POSITION SRC OF DISLIKE
    let currentDisSrc = i.parentElement
      .querySelector(".dof")
      .getAttribute("src");

    // GET SUM-LIKES AND SUM-DISLIKES, CREATE COUNTERS
    let sumLikes = i.parentElement.querySelector(".sum-likes");
    let counterLikes = Number(sumLikes.innerHTML);
    let sumDislikes = i.parentElement.querySelector(".sum-dislikes");
    let counterDislikes = Number(sumDislikes.innerHTML);

    // CHECKING, SET SRC AND COMPUTE COUNTERS
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

// ADD LISTENER FOR DISLIKE AND CHANGE IT DEPENDING ON LIKE
for (let i of dofCol) {
  i.addEventListener("click", function (event) {
    // GET CURRENT POSITION SRC OF LIKE
    let currentLikeSrc = i.parentElement
      .querySelector(".lof")
      .getAttribute("src");

    // GET SUM-LIKES AND SUM-DISLIKES, CREATE COUNTERS
    let sumDislikes = i.parentElement.querySelector(".sum-dislikes");
    let counterDislikes = Number(sumDislikes.innerHTML);
    let sumLikes = i.parentElement.querySelector(".sum-likes");
    let counterLikes = Number(sumLikes.innerHTML);

    // CHECKING, SET SRC AND COMPUTE COUNTERS
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

/********* B U T T O N S  C O M M E N T ,  A D D  and  R E M O V E *********/

// GET COLLECTION BUTTONS
const commentButtonsColl = document.querySelector(".comment-buttons");
const commentButtons = document.querySelector(".comment-buttons").children;
const btnAddComment = commentButtons[0];
const btnRemoveComment = commentButtons[1];

// GET FORM
const form = document.querySelector(".form");
const btnSelectAvatar = document.querySelector(".btn-select-avatar");
const avatars = document.querySelector(".avatars");
const avatarsArray = avatars.children;

// SET LISTENER TO BUTTON "ADD COMMENT",
//  THEN HIDE IT BY CLICK, AND SHOW FORM
btnAddComment.addEventListener("click", function (event) {
  if (form.classList.contains("hide-form")) {
    form.classList.remove("hide-form");
    form.classList.add("show-form");
    commentButtonsColl.classList.add("hide-comment-buttons");
  }
});

// SET LISTENER TO BUTTON "REMOVE COMENT"
btnRemoveComment.addEventListener("click", function (event) {
  let lastPerson = slides[slides.length - 1];
  let namePerson = lastPerson.querySelector(".name-person");
  let profession = lastPerson.querySelector(".profession");
  let testimonial = lastPerson.querySelector(".testimonial");

  let src = document.querySelector(".person-avatar");
  src.getAttribute("src");
  src.setAttribute("src", " ");

  namePerson.textContent = "Your name";
  profession.textContent = "Your profession";
  testimonial.textContent =
    "Here maybe your comment, click to the button 'Add comment' below";

  if ((btnAddComment.textContent = "Edit comment")) {
    btnAddComment.textContent = "Add comment";
  }
});

// SET LISTENER TO SELECT AVATAR
// GET ATTRIBUTE SRC OF AVATAR,
// SET SRC TO PERSON CARD

btnSelectAvatar.addEventListener("click", function (event) {
  if (avatars.classList.contains("hide-avatars")) {
    avatars.classList.remove("hide-avatars");
  }
});

for (let i of avatarsArray) {
  let personAvatar = document.querySelector(".person-avatar");
  i.addEventListener("click", function (event) {
    let src = event.target.getAttribute("src");
    personAvatar.setAttribute("src", src);
    let parentColl = i.parentElement.children;

    if (i.classList.contains("select-avatar-border")) {
      i.classList.remove("select-avatar-border");
    } else {
      for (let j of parentColl) {
        if (j.classList.contains("select-avatar-border")) {
          j.classList.remove("select-avatar-border");
        }
      }
      i.classList.add("select-avatar-border");
    }
  });
}

// SET LISTENER FOR INPUT NAME, PROFESSION
// GET VALUE NAME, PROFESSION AND SET ARE TO PERSON

const person = slides[slides.length - 1];

let namePerson = person.querySelector(".name-person");
let professionPerson = person.querySelector(".profession");
let testimonialPerson = person.querySelector(".testimonial");

const inputName = document.getElementById("input-name");
const inputProfession = document.getElementById("input-profession");
const textareaComment = document.getElementById("textarea-comment");

// EVENTS FOR BUTTON OF FORM "SAVE COMMENT"
const saveComment = document.querySelector(".save-comment");

saveComment.addEventListener("click", function () {
  namePerson.innerHTML = inputName.value;
  professionPerson.innerHTML = inputProfession.value;
  testimonialPerson.innerHTML = textareaComment.value;

  inputName.value = " ";
  inputProfession.value = " ";
  textareaComment.value = " ";

  commentButtonsColl.classList.remove("hide-comment-buttons");
  form.classList.add("hide-form");

  btnAddComment.textContent = "Edit comment";
});

// EVENTS FOR BUTTON OF FORM "CLEAR AND RETURN"
const clearAndReturn = document.querySelector(".clear-and-return");

clearAndReturn.addEventListener("click", function () {
  inputName.value = " ";
  inputProfession.value = " ";
  textareaComment.value = " ";

  commentButtonsColl.classList.remove("hide-comment-buttons");
  form.classList.add("hide-form");

  let personAvatar = document.querySelector(".person-avatar");
  personAvatar.getAttribute("src");

  personAvatar.setAttribute("src", " ");
});
