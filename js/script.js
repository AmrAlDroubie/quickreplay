const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar .nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navbar-menu");
    menu.classList.toggle("show");
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbar.classList.remove("top-50p");
  } else {
    navbar.classList.add("top-50p");
  }
});

document.addEventListener("click", function (e) {
  const circle = document.createElement("div");
  const parent = document.createElement("div");
  parent.classList.add("parent");
  parent.style.position = "absolute";
  parent.style.top = 0;
  parent.style.left = 0;
  parent.style.zIndex = 4;
  parent.style.width = "100%";
  parent.style.height = document.body.scrollHeight + "px";
  parent.style.overflow = "hidden";
  circle.classList.add("circle");
  circle.style.left = `${e.pageX}px`;
  circle.style.top = `${e.pageY}px`;
  parent.appendChild(circle);
  document.body.appendChild(parent);
  setTimeout(() => {
    parent.remove();
  }, 600);
});
