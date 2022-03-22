// toggle menu--------------------------------

let amount = 180;
let initial = 180;

document.getElementById("toggle_menu").addEventListener("click", toggleMenu);
function toggleMenu() {
  initial += amount;
  this.style.transform = "rotateX(" + initial + "deg)";

  let menuItom = document.getElementById("menu_itom");
  if (menuItom.style.display === "block") {
    menuItom.style.display = "none";
  } else {
    menuItom.style.display = "block";
  }

  window.addEventListener("click", function (e) {
    if (
      !document.getElementById("menu_itom").contains(e.target) &&
      !document.getElementById("toggle_menu").contains(e.target)
    ) {
      document.getElementById("menu_itom").style.display = "none"; 
    }
  });
}

// scrollspy...................

let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav ul li");
//  console.log(navlinks);
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav ul li[href*= " + id + " ]")
          .classList.add("active");
      });
    }
  });
};

// modal content===================================================

let sliderImg = document.querySelector(".slider_img");
let images = [
  "images/service/1.jpg",
  "images/service/2.jpg",
  "images/service/3.jpg",
];

let i = 0;

document.getElementById("prev").addEventListener("click", function () {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
});
document.getElementById("next").addEventListener("click", function () {
  if (i >= images.length - 1) i = -1;
  i++;

  return setImg();
});

function setImg() {
  return (sliderImg.src = images[i]);
}

// -------------- changing modal background img on indivisual click-----------------------
document
  .querySelector("#search_icon_first")
  .addEventListener("click", function () {
    document.querySelector(".slider_img").src = images[0];
  });
// ------------------
document
  .querySelector("#search_icon_second")
  .addEventListener("click", function () {
    document.querySelector(".slider_img").src = images[1];
  });
// ----------
document
  .querySelector("#search_icon_third")
  .addEventListener("click", function () {
    document.querySelector(".slider_img").src = images[2];
  });

// ----------------------modal --------------------------

const searchIcon = document.querySelectorAll(".search_icon");

for (let j = 0; j < searchIcon.length; j++) {
  searchIcon[j].addEventListener("click", function () {
    document.querySelector("#modal").style.display = "flex";
  });
}
// ----------------------------------------------
document.querySelector("#close_btn").addEventListener("click", function () {
  document.querySelector("#modal").style.display = "none";
});
