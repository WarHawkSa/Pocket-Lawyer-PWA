document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("toggle-info");
  const extraInfo = document.getElementById("extra-info");

  toggle.addEventListener("click", function() {
    if (extraInfo.style.display === "none") {
      extraInfo.style.display = "block";
      toggle.textContent = "Hide Info";
    } else {
      extraInfo.style.display = "none";
      toggle.textContent = "Show More Info";
    }
  });
});
