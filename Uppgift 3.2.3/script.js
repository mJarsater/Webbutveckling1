function drawLine(){
    var canvas = document.getElementById("canvas-line");
    var canvasContex = canvas.getContext("2d");
    var x = document.getElementById("x-field").value;
    var y = document.getElementById("y-field").value;
    var xStart = document.getElementById("x-start").value;
    var yStart = document.getElementById("y-start").value;


    canvasContex.moveTo(xStart,yStart);
    canvasContex.lineTo(x, y);
    canvasContex.stroke();
}

function drawSmiley(){
    var canvas = document.getElementById("canvas-smiley");
    var canvasContex = canvas.getContext("2d");

    canvasContex.beginPath();
    canvasContex.arc(95,50,40,0,2* Math.PI);
    canvasContex.stroke();
    canvasContex.fillStyle="yellow";
    canvasContex.fill();

    canvasContex.beginPath();
    canvasContex.arc(75,40,10,0,2* Math.PI);
    canvasContex.stroke();

    canvasContex.beginPath();
    canvasContex.arc(115,40,10,0,2* Math.PI);
    canvasContex.stroke();


    canvasContex.beginPath();
    canvasContex.moveTo(85,60);
    canvasContex.bezierCurveTo(85, 70, 115, 70, 115, 60);
    canvasContex.stroke();
    canvasContex.fillStyle = "black";
    canvasContex.fill();
}


function drawText(){
    var canvas = document.getElementById("canvas-text");
    var canvasContex = canvas.getContext("2d");

    canvasContex.font = "20px Arial";
    canvasContex.fillText("En smiley!", 150, 120);
}

function addGradient(){
    var canvas = document.getElementById("canvas-gradient");
    var canvasContex = canvas.getContext("2d");

    var gradient = canvasContex.createRadialGradient(75, 50, 5, 90, 60, 100);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "white");

    canvasContex.fillStyle = gradient;
    canvasContex.fillRect(0, 0, 500, 250);
}

function addImage(){
    var canvas = document.getElementById("canvas-image");
    var canvasContex = canvas.getContext("2d");
    var image = document.getElementById("image");

    canvasContex.drawImage(image, 0, 0, canvas.clientWidth, canvas.height);
}

function saveImage(){
    var canvas = document.getElementById("canvas-image");
    canvas.save();

}