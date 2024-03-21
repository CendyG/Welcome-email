document.addEventListener("DOMContentLoaded", function() {
  var emailInput = document.getElementById("emailInput");
  var buttonRight = document.querySelector(".button-right");

  emailInput.addEventListener("input", function() {
    if (emailInput.value.trim() !== "") {
      buttonRight.style.display = "inline-block";
    } else {
      buttonRight.style.display = "none";
    }
  });
});
