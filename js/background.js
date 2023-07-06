const images = [
	"a1.jpg",
	"a2.jpg",
	"a3.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

bgImage.classList.add("bgImage");