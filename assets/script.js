const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const actuelBullet = document.querySelector(".dots .dot_selected");
const boxImage = document.querySelector(".banner-img");
const taglineImage = document.querySelector("#banner p");
let currentIndex = 0;

//Cette fonction ajoute les bullets de base
function add_bulletPoints(images) {
  const numberImg = images.length;
  const dots = document.querySelector(".dots");
  let bulletsContent = "";
  for (let i = 0; i < numberImg; i++) {
    bulletsContent += `<div class="dot" id="dot${i}"></div>`;
  }
  dots.innerHTML = bulletsContent;
  const imageSelected = document.querySelector(".dots .dot");
  imageSelected.classList.add("dot_selected");
}

//Cette fonction gère les clics sur les flèches du carrousel défilant
function navigate(position) {
  currentIndex += position;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  const actuelIdBullet = document.querySelector(`.dots #dot${currentIndex}`);
  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("dot_selected"));
  actuelIdBullet.classList.add("dot_selected");

  taglineImage.innerHTML = slides[currentIndex].tagLine;
  const fileName = slides[currentIndex].image;
  boxImage.setAttribute("src", `assets/images/slideshow/${fileName}`);
}

add_bulletPoints(slides);

arrowLeft.addEventListener("click", () => {
  navigate(-1);
});

arrowRight.addEventListener("click", () => {
  navigate(1);
});
