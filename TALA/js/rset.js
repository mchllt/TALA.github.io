// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // ADD THIS LINE
  document.body.style.height = "100%"; // ADD THIS LINE
};



// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // ADD THIS LINE
  document.body.style.height = "auto"; // ADD THIS LINE
};

// When the user clicks anywhere outside of the modal, close it
document.addEventListener("click", handler, true);
function handler(event) {
  if (event.target == modal) {
    event.stopPropagation();
    event.stopPropagation();
  }
}
