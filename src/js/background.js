const imges = ["0.jpg", "1.jpg", "2.jpg"];
const randImg = imges[Math.floor(Math.random() * imges.length)];

//const randImg = backImg[Math.floor(Math.random*backImg.length)];
console.log(randImg);

const bgImage = document.createElement("img");

bgImage.src = `./img/${randImg}`;
console.log(bgImage);
document.body.appendChild(bgImage);
