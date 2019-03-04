var link = document.querySelector(".contact-us");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector(".write-us-form-name");
var email = popup.querySelector(".write-us-form-email");
var text = popup.querySelector(".write-us-form-letter-text");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

var zzz = document.querySelector('.buttonx');
console.log(zzz);

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

var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

document.addEventListener('keydown', handleKeys, true);
function handleKeys(evt) {
  if (evt.keyCode === 13) {
    var trg1 = evt.target;
    var evt1 = document.createEvent("MouseEvents");
    evt1.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    trg1.focus();
    trg1.dispatchEvent(evt1);
    trg1.focus();
  }
}
