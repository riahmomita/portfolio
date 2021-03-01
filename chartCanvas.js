var canvas = document.querySelector('canvas');

canvas.width = 700;
canvas.height = 600;

var c = canvas.getContext('2d');

//apple 
c.fillStyle = "red";
c.fillRect(10, 200, 100, 500);
//apple quantity
c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("20", 45, 565);
c.fillText("Apple", 30, 590);

//orange
c.fillStyle = "orange";
c.fillRect(110, 400, 100, 250);
//orange quantity
c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("10", 145, 565);
c.fillText("Orange", 125, 590);

//banana
c.fillStyle = "yellow";
c.fillRect(210, 300, 100, 300);
//banana quantity
c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("15", 245, 565);
c.fillText("Banana", 225, 590);

//kiwi
c.fillStyle = "green";
c.fillRect(310, 540, 100, 140);
//kiwi quantity
c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("3", 350, 565);
c.fillText("Kiwi", 335, 590);

//blueberry
c.fillStyle = "blue";
c.fillRect(410, 500, 100, 240);
//blueberry quantity
c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("5", 450, 565);
c.fillText("Blueberry", 418, 590);

//grape
c.fillStyle = "purple";
c.fillRect(510, 440, 100, 240);
//grape quantity
c.font = "20px Arial";
c.fillStyle = "black";
c.fillText("8", 555, 565);
c.fillText("Grapes", 525, 590);