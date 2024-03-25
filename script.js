document.addEventListener("DOMContentLoaded", function() {
  var emailInput = document.getElementById("emailInput");
  var welcome = document.querySelector(".welcome");

  emailInput.addEventListener("input", function() {
    if (emailInput.value.trim() !== "") {
      welcome.style.display = "inline-block";
    } else {
      welcome.style.display = "none";
    }
  });
});
