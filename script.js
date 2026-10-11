// Hero flower image click → change image
const flowerImg = document.getElementById("flowerImage");
const flowers = ["home 01.png", "image1.png", "image2 (2).png", "image3.png"];
let index = 0;

flowerImg.addEventListener("click", () => {
  index = (index + 1) % flowers.length;
  flowerImg.src = flowers[index];

  // 3D flip effect on click
flowerImg.style.transform = "rotateY(180deg) scale(1.2)";
  setTimeout(() => {
    flowerImg.style.transform = "rotateY(0deg) scale(1)";
  }, 600);
});