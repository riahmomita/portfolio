const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width = 320;
const height = canvas.height = 480;
const frameWidth = 80;
const frameHeight = 135;
const xPos = 130;
const yPos = 160;
const scale = 1;
const fps = 60;
const secondsToUpdate = 1 * fps;
let frameIndex = 0;
let count = 0;

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

const spriteSheet = new Image();
spriteSheet.src = "https://www.edureka.co/blog/wp-content/uploads/2019/08/CSS-Sprites.png";

function animate() {
	context.drawImage(
		spriteSheet,
		frameIndex * frameWidth,
		0,
		frameWidth,
		frameHeight,
		xPos,
		yPos,
		frameWidth * scale,
		frameHeight * scale
	);

	count++;
	if (count > 5){
		frameIndex++;
		count = 0;
	}
	if (frameIndex > 4) {
		frameIndex = 0;
	}
}



function frame() {
	context.clearRect(0, 0, width, height);
	animate();
	requestAnimationFrame(frame);
}

frame();
