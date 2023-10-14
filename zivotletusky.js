document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".mobile-menu");
    const hamburgerIcon = document.querySelector(".hamburger-icon");

    // Toggle the mobile menu when the hamburger icon is clicked
    hamburgerIcon.addEventListener("click", function () {
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }
    });
});
var menu = document.querySelector(".mobile-menu");
var scrollPosition = 0;

window.addEventListener("scroll", function () {
  var currentPosition = window.scrollY;

  if (currentPosition < scrollPosition) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

  scrollPosition = currentPosition;
});



