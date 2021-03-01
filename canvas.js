var canvas = document.querySelector('canvas');

canvas.width = 1000;
canvas.height = 600;

var c = canvas.getContext('2d');

//mountains
c.beginPath();
c.moveTo(0,600);
c.lineTo(0,350);
c.lineTo(200,600);
c.closePath();
c.fillStyle = "#060d13";
c.fill();


c.beginPath();
c.moveTo(0,600);
c.lineTo(300,150);
c.lineTo(600,700);
c.closePath();
c.fillStyle = "#060d13";
c.fill();

c.beginPath();
c.moveTo(475,600);
c.lineTo(800,200);
c.lineTo(1000,500);
c.lineTo(1000,600);
c.closePath();
c.fillStyle = "#060d13";
c.fill();

c.beginPath();
c.moveTo(375,600);
c.lineTo(575,350);
c.lineTo(800,600);
c.closePath();
c.fillStyle = "#0d0d0d";
c.fill();

c.beginPath();
c.moveTo(250,600);
c.lineTo(100,250);
c.lineTo(0,400);
c.lineTo(0,600);
c.closePath();
c.fillStyle = "#0d0d0d";
c.fill();

//text on the file 
c.font = "30px Arial";
c.fillStyle = "#ccddff";
c.fillText("Snowy Night", 10, 50);

//snow 
for (var i=0; i<200; i++)
{
	var x = Math.random() * 1000;
	var y = Math.random() * 600; 
	c.beginPath();
	c.arc(x, y, 1, Math.PI * 2, false);
	c.strokeStyle = "#f2f2f2";
	c.stroke();
}

//moon 
c.beginPath();
c.arc(800,100,50, 0, Math.PI * 2, false);
c.strokeStyle = "#808000";
c.stroke();
c.fillStyle = "#ffffb3";
c.fill();

//ground
c.fillStyle = "#ccddff";
c.fillRect(0, 590, 1000, 10);

//house
c.fillStyle = "#1f1f2e";
c.fillRect(100, 500, 170, 170);

//chimney
c.fillStyle = "#1f1f2e";
c.fillRect(130, 460, 20, 50);
//roof
c.beginPath();
c.moveTo(100,500);
c.lineTo(190,450);
c.lineTo(270,500);
c.lineTo(100,500);
c.closePath();
c.fillStyle = "#29293d";
c.fill();
//door
c.fillStyle = "#e0e0eb";
c.fillRect(170, 550, 30, 50);
//windows
c.fillStyle = "black";
c.fillRect(110, 520, 40, 30);

c.fillStyle = "black";
c.fillRect(220, 520, 40, 30);

//windowframe (left)
c.fillStyle = "white";
c.fillRect(127, 520, 4, 30);

c.fillStyle = "white";
c.fillRect(110, 534, 40, 4);

//windowframe (right)
c.fillStyle = "white";
c.fillRect(238, 520, 4, 30);

c.fillStyle = "white";
c.fillRect(220, 534, 40, 4);

//house knob 
c.arc(180,575,3, 0, Math.PI * 2, false);
c.fillStyle = "black";
c.fill();

//snowmanBody (large to small)
c.beginPath();
c.arc(350,585,15, 0, Math.PI * 2, false);
c.fillStyle = "#f2f2f2";
c.fill();

c.beginPath();
c.arc(350,565,11, 0, Math.PI * 2, false);
c.fillStyle = "#f2f2f2";
c.fill();

c.beginPath();
c.arc(350, 548, 8, 0, Math.PI * 2, false);
c.fillStyle = "#f2f2f2";
c.fill();

//snowmanHat
c.fillStyle = "#666666";
c.fillRect(334, 538, 33, 3);
c.fillStyle = "#666666";
c.fillRect(343, 528, 13, 10);

//snowmanEyes
c.beginPath();
c.arc(347,545,1.5, 0, Math.PI * 2, false);
c.fillStyle = "black";
c.fill();
c.beginPath();
c.arc(353,545,1.5, 0, Math.PI * 2, false);
c.fillStyle = "black";
c.fill();

//snowmanNose
c.beginPath();
c.moveTo(349,547);
c.lineTo(354,549); 
c.strokeStyle = "#ff8000";
c.stroke();

//snowmanMouth
c.beginPath();
c.arc(347,550,1, 0, Math.PI * 2, false);
c.arc(349,551,1, 0, Math.PI * 2, false);
c.arc(351,551.7,1, 0, Math.PI * 2, false);
c.arc(353,551.5,1, 0, Math.PI * 2, false);
c.arc(355,551,1, 0, Math.PI * 2, false);
c.fillStyle = "black";
c.fill();

//snowmanHands (left & right)
c.beginPath();
c.moveTo(340,560);
c.lineTo(324,553); 
c.strokeStyle = "#804000";
c.stroke();

c.beginPath();
c.moveTo(360,560);
c.lineTo(374,553); 
c.strokeStyle = "#804000";
c.stroke();










