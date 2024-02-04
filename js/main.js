const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav_btn");
const navBtnImg = document.querySelector("#nav_btn_img");
const navLinks = document.querySelectorAll(".nav__link");

navBtn.addEventListener("click", () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/icons/nav-close.svg";
  } else {
    navBtnImg.src = "./img/icons/nav-open.svg";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navBtnImg.src = "./img/icons/nav-open.svg";
  });
});
AOS.init();
