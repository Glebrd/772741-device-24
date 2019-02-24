var link = document.querySelectorAll(".user-navigation-login");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector(".write-us-form-name");
var email = popup.querySelector(".write-us-form-email");
var text = popup.querySelector(".write-us-form-letter-text");


for (let index = 0; index < link.length; index++) {
  link[index].addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
});
}


// link[0].addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.add("modal-show");
// });

// link[1].addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.add("modal-show");
// });

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});