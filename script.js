// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let section = document.getElementsByTagName("section");
let hexagon = document.getElementsByClassName("hexagon");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
    for (let item of section) {
      item.classList.add("active");
    }
    for (let item of hexagon) {
      item.classList.add("active");
    }
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
    for (let item of section) {
      item.classList.remove("active");
    }
    for (let item of hexagon) {
      item.classList.remove("active");
    }
  }
};
