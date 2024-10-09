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

//Cette fonction ajoute les bullets de base
function add_bulletPoints(images) {
  const numberImg = images.length;
  const dots = document.querySelector(".dots");
  let bulletsContent = "";
  for (let i = 0; i < numberImg; i++) {
    bulletsContent += `<div class="dot" id="${i}"></div>`;
  }
  dots.innerHTML = bulletsContent;
  const imageSelected = document.querySelector(".dots .dot");
  imageSelected.classList.add("dot_selected");
}

//Cette fonction gère les clics sur les flèches du carrousel défilant
function arrows() {
  let arrowLeft = document.querySelector(".arrow_left");
  let arrowRight = document.querySelector(".arrow_right");

  arrowLeft.addEventListener("click", () => {
    let actuelBullet = document.querySelector(".dots .dot_selected");
    let actuelIdBullet = actuelBullet.getAttribute("id");
    let leftBullet;
    if (actuelIdBullet === "0") {
      leftBullet = document.getElementById(3);
    } else {
      leftBullet = document.getElementById(parseInt(actuelIdBullet) - 1);
    }
    let leftIdBullet = leftBullet.getAttribute("id");
    let boxImage = document.querySelector(".banner-img");
    let taglineImage = document.querySelector("#banner p");

    taglineImage.innerHTML = slides[leftIdBullet].tagLine;
    boxImage.setAttribute(
      "src",
      `assets/images/slideshow/slide${parseInt(leftIdBullet) + 1}.jpg`
    );
    if (boxImage.src.endsWith("slide4.jpg")) {
      boxImage.setAttribute("src", `assets/images/slideshow/slide4.png`);
    }
    actuelBullet.classList.remove("dot_selected");
    leftBullet.classList.add("dot_selected");
  });

  arrowRight.addEventListener("click", () => {
    let actuelBullet = document.querySelector(".dots .dot_selected");
    let actuelIdBullet = actuelBullet.getAttribute("id");
    let rightBullet;
    if (actuelIdBullet === "3") {
      rightBullet = document.getElementById(0);
    } else {
      rightBullet = document.getElementById(parseInt(actuelIdBullet) + 1);
    }

    let rightIdBullet = rightBullet.getAttribute("id");
    let boxImage = document.querySelector(".banner-img");
    let taglineImage = document.querySelector("#banner p");

    taglineImage.innerHTML = slides[rightIdBullet].tagLine;
    boxImage.setAttribute(
      "src",
      `assets/images/slideshow/slide${parseInt(rightIdBullet) + 1}.jpg`
    );
    if (boxImage.src.endsWith("slide4.jpg")) {
      boxImage.setAttribute("src", `assets/images/slideshow/slide4.png`);
    }
    actuelBullet.classList.remove("dot_selected");
    rightBullet.classList.add("dot_selected");
  });
}

add_bulletPoints(slides);
arrows();
