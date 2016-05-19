var link = document.querySelector(".feedback");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".close-modal");

link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("modal-feedback-show");
});

close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("modal-feedback-show");
});