var canvas = document.getElementById("coloringBook"); //grabbing the id assigned to the canvas element
var context = canvas.getContext("2d"); //need the 2d rendering context for the drawing surface of a canvas element in order to draw on it
var paint; //global variable to be used later. (boolean)
var canvasWidth = 600; //have to set canvas width and height here to clear the canvas 
var canvasHeight = 400;
//set other canvas attributes in css 


context.lineWidth = 10;
context.lineJoin = context.lineCap = 'round';


//MOUSE DOWN EVENT (javascript method)
//when user clicks on canvas, record the position in an array via addClick function


crayonOn = $('#coloringBook').mousedown(function(event) {
var mouseX = event.pageX - this.offsetLeft; //event.pageX property returns position of the mouse pointer, relative to the left edge of the document.
var mouseY = event.pageY - this.offsetTop; //event.pageY property is relative to the top edge of the document.


paint = true; //lets us know if the virtual crayon is pressing down on the paper or not
	//if paint = true, record the value
addClick(mouseX, mouseY);
// redraw(); //to update the canvas
});


//MOUSE MOVE EVENT (javascript method)
//draw on the canvas when user is pressing down
crayonMove = $('#coloringBook').mousemove(function(event) {
	if(paint) {
		addClick(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
		redraw();
	}
});


//MOUSE UP EVENT (javascript method)
//crayon is off the paper
crayonOff = $('#coloringBook').mouseup(function(event) {
	paint = false;
	clickY.length = 0;
	clickX.length = 0;
});


//MOUSE LEAVE EVENT (javascript method)
//if the crayon goes off the paper
crayonOffCanvas = $('#coloringBook').mouseleave(function(event) {
	paint = false;
});


//ADDCLICK - addClick function saves the click position
//

var clickX = []; //saves X coordinates
var clickY = []; //saves Y coordinates
var clickDrag = []; //saves final position of crayon
var paint;

var start_time;

function addClick(x, y, dragging) {
	clickX.push(x);
	clickY.push(y);
	console.log('dragging ', dragging);
	clickDrag.push(dragging);
	clickColor.push(currentColor); //record the chosen color when the user clicks
}

$('#coloringBook').mousedown(start);
$('#coloringBook').mouseup(end);

////////// TIMER FUNCTIONS //////////////
	function start() {
    	start_time = new Date();
    	// console.log('start time', start_time);
	}
	
	function end() {
	    var end_time = new Date();
	    // console.log('now', end_time);
	    soundLength = end_time-start_time;
	    console.log('soundLength', soundLength);
	}
//////////////////////


//REDRAW FUNCTION - when call redraw function, clear the canvas and redraw everything
function redraw() {
	console.log('redraw function called');
	console.log('clickX array ', clickX);
	console.log('clickY array ', clickY);
	//context.clearRect(0, 0, context.canvas.width, context.canvas.height); //clear the canvas

	context.strokeStyle = "#4997D0";
	context.lineJoin = "round";
	context.lineWidth = 5;
	context.beginPath();
	context.moveTo(clickX[0], clickY[0]);
	for(var i=0; i < clickX.length; i++) {
		// context.beginPath();
		// if(clickDrag[i] && i) {
		// 	context.moveTo(clickX[i-1], clickY[i-1]);
		// } else {
			context.lineTo(clickX[i], clickY[i]);
			//context.closePath();
		}
	context.strokeStyle = clickColor[i];
		context.stroke();	
	}

//CLEAR THE CANVAS 
function clearCanvas() {
	context.clearRect(0, 0, canvasWidth, canvasHeight); // CanvasRenderingContext2D.clearRect() method of the Canvas 2D API sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.
}

$('#eraseCanvas').click(function() {
	clearCanvas(); 
});

//AUDIO
//when click blue, play and turn text to "pause"
//when click blue, pause and turn text to "blue"

function playAudio() {
	var blueCrayon = document.getElementById('blue'); //grab the blue button
	var cMajor = document.getElementById('cMajor'); //grab the audio file
	var play = (blue).click( function () {
		cMajor.play();
	} 
	// cMajor.play();
}

//SET COLORS
var currentColor = blue;
var clickColor = [];

// var blue = "#4997D0";
// var red = "#ED0A3F";
// var rawSienna = "#D27D46";
// var orange = "#FF8833";
// var yellowRed = "#ECB176";
// var yellow = "#FBE870";
// var yellowGreen = "#C5E17A";
// var green = "#3AA655";
// var blueGreen = "#0095B7";
// var blueViolet = "#6456B7";
// var purple = "#6B3FA0";
// var redViolet = "#BB3385";
// var carnationPink = "#FFA6C9";
// var brown = "#AF593E";
// var black = "#000000";
// var white = "#FFFFFF";
















