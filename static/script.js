let hamburger = document.querySelector(".burger");
let navigation = document.querySelector(".navigation")
let links = document.querySelectorAll(".navigation li");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });