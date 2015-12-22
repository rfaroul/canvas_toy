var canvas = document.getElementById("coloringBook"); //grabbing the id assigned to the canvas element
var context = canvas.getContext("2d"); //need the 2d rendering context for the drawing surface of a canvas element in order to draw on it

// var paint = false; //A


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////  PREPARE THE CANVAS  ////////////////

var canvasWidth = 500; //have to set canvas width and height here to clear the canvas 
var canvasHeight = 375; 
context.lineJoin = context.lineCap = 'round';
var currentNote;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// SET COLORS  ////////////////
var color1 = "#FFFB40";
var color2 = "#744FE8";
var color3 = "#FF4CAD";
var color4 = "#E82B2D";
var color5 = "#FFCFB4";
var color6 = "#966643";
var color7 = "#999999";
var color8 = "#E8A22B";
var color9 = "#FF806E";
var color10 = "#323AE8";
var color11 = "#89FF9B";
var color12 = "#892F9B";
var color13 = "#C384B1";
var color14 = "#FB7FFF";
var color15 = "#34A76C";
var color16 = "#CD4A4C";

$('#color1').click(function () { currentColor = color1; currentNote = aFlat; });
$('#color2').click( function () { currentColor = color2; currentNote = aNote; });
$('#color3').click(function () { currentColor = color3; currentNote = bFlat; });
$('#color4').click(function () { currentColor = color4; currentNote = bNote; });
$('#color5').click(function () { currentColor = color5; currentNote = cNote; });
$('#color6').click(function () { currentColor = color6; currentNote = cSharp; });
$('#color7').click(function () { currentColor = color7; currentNote = dNote; });
$('#color8').click(function () { currentColor = color8; currentNote = eFlat; });
$('#color9').click(function () { currentColor = color9; currentNote = eNote; });
$('#color10').click(function () { currentColor = color10; currentNote = fNote; });
$('#color11').click(function () { currentColor = color11; currentNote = fSharp; });
$('#color12').click(function () { currentColor = color12; currentNote = gNote; });
$('#color13').click(function () { currentColor = color13; currentNote = lowerC; });
$('#color14').click(function () { currentColor = color14; currentNote = lowerE; });
$('#color15').click(function () { currentColor = color15; currentNote = lowerG; });
$('#color16').click(function () { currentColor = color16; currentNote = upperC; });


var currentColor = '#FFFFFF';
var clickColor = [];

var outlineImage = new Image(); 
var drawingAreaX = 150;
var drawingAreaY = 11;
var drawingAreaWidth = 175;
var drawingAreaHeight = 350;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// MOUSE DOWN EVENT (a javascript method) 
//when user clicks on canvas, record the position in an array via addClick function
	crayonOn = $('#coloringBook').mousedown(function (event) {
		var mouseX = event.pageX - this.offsetLeft; //event.pageX property returns position of the mouse pointer, relative to the left edge of the document.
		var mouseY = event.pageY - this.offsetTop; //event.pageY property is relative to the top edge of the document.
		paint = true; //lets us know if the virtual crayon is pressing down on the paper or not
			//if paint = true, record the value
		console.log(mouseX, mouseY); //beginning position of pointer
		addClick(mouseX, mouseY);
		redraw(); //to update the canvas
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// MOUSE MOVE EVENT (a javascript method) 
//draw on the canvas when user is pressing down
//GLOBAL VARIABLES mouseX and mouseY

	crayonMove = $('#coloringBook').mousemove(function(event) {
		if(paint==true) {
			addClick(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
			redraw();
		}
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// MOUSE UP EVENT (a javascript method) 
//crayon is off the paper but still hovering over the canvas
	crayonOff = $('#coloringBook').mouseup(function(event) {
		paint = false;
		console.log('end of mouseup', currentColor, soundLength); //soundLength is undefined here
		// redraw(); 
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// MOUSE LEAVE EVENT (a javascript method) 
//if the crayon goes off the paper
	crayonOffCanvas = $('#coloringBook').mouseleave(function(event) {
		paint = false;
		console.log('end of mouseleave function', currentColor, soundLength); 
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// ADDCLICK FUNCTION (saves the click position) 

var clickX = []; //saves X coordinates
var clickY = []; //saves Y coordinates
var clickDrag = []; //saves final position of crayon
var paint;

function addClick(x, y, dragging) {
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
	clickColor.push(currentColor); //record the chosen color when the user clicks
};

$('#coloringBook').mousedown(start);
$('#coloringBook').mouseup(end);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// CLEAR THE CANVAS //////////////////
function clearCanvas() {
	context.save();
	console.log("mouseX " mouseX, "mouseY " mouseY);
	context.setTransform(1, 0, 0, 1, 0, 0); //should always clear the right space. setTransform() sets the transformation matrix to its default state
	context.clearRect(0, 0, canvas.width, canvas.height); // CanvasRenderingContext2D.clearRect() method of the Canvas 2D API sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.
	context.restore(); //still have old transforms
};

$('#eraseCanvas').click(clearCanvas);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// REDRAW FUNCTION (clears the canvas and redraws everything)
function redraw() {
	clearCanvas(); 
	
	context.lineJoin = "round"; //CONSIDER MOVING AFTER LINE 149

	console.log('redraw function called');

	for(var i=0; i < clickX.length; i++) {
		context.save();
		context.beginPath(); 
		if (clickDrag[i] && i) {
		context.moveTo(clickX[i-1], clickY[i-1]);
		} else {
			context.moveTo(clickX[i]-1, clickY[i]);
		}
		context.lineTo(clickX[i], clickY[i]);
		context.closePath();
		context.strokeStyle = clickColor[i];
		context.lineWidth = 3;
		context.stroke();		
	}
		
	context.restore();

	context.globalAlpha = 1; //specifies alpha value of shapes and images before they're drawn onto canvas. ranges from 0 to 1. 1 = opaque  
		//NOT SURE THAT I NEED LINE 155 BECAUSE "1" IS THE DEFAULT 
		//drawingAreaX = where to put the top-left corner of the source image (x-coordinate)
		//drawingAreaY = where to put the top-left corner of the source image (y-coordinate)
		//drawingAreaWidth = the width to draw the image in the destination  canvas
		//drawingAreaHeight = the height to draw the image in the destination canvas
	context.drawImage( outlineImage, drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// SAVE THE DRAWING/CANVAS STATE //////////////////
//want to save the canvas state 
//save image as data url (png format by default)
var link = document.createElement('a');
link.innerHTML = 'download image';
link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);
document.body.appendChild(link);




// To save the canvas drawing as an image, we can set the source of an image object to the image data URL.  From there, a user can right click on the image to save it to their local computer.  Alternatively, we could also open up a new browser window with the image data url directly and the user could save it from there.

// Note: The toDataURL() method requires that any images drawn onto the canvas are hosted on a web server with the same domain as the code executing it.  If this condition is not met, a SECURITY_ERR exception is thrown.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// AUDIO CLICK EVENT FOR MULTIPLE SOUNDS //////////////////

console.log("before the click event");

function playAudio ( userSong ) {
	console.log("inside click event callback");
	console.log( event ); 
	if (song.length > 0) {
		console.log("about to play");
		console.log(currentColor, soundLength); //both global variables 
	    //soundLength defined
		console.log("song array", userSong); 
		currentNote = userSong.pop(); 
		console.log("popped", userSong);
		console.log( currentNote.chord, currentNote.soundLength);

		currentNote.chord.play();
		console.log("after sound play");

		setTimeout( function () {
			console.log("set timeout just finished");
			currentNote.chord.pause();
			console.log("finished");
			playAudio(userSong);
			console.log("what song are you playing?", userSong)
		}, currentNote.soundLength );
	}
	else {
		console.log("you're done!")
	};
		//how to get it to stop
		//restart Audio when finished playing for specified length of time
};

$('#play').click( function(event){

	playAudio( song );
} );
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// TIMER FUNCTIONS //////////////////
var start_time;

var soundLength;

	function start () {
		start_time = new Date(); //undefined
		console.log('start', start_time);
	}

	function end() {
		 var end_time = new Date();
	    console.log('end', end_time);
	    soundLength = end_time - start_time;
	    console.log(currentColor, soundLength); //both global variables 
	    //soundLength defined
	    console.log('currentNote', currentNote);
	    song.push( { 'chord': currentNote, 'soundLength': soundLength });
	    console.log('end function', song);
	}

	var song = [];


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// ONLOAD FUNCTIONS //////////////////

$(document).ready(prepareCanvas);

function prepareCanvas () { 
	outlineImage.src = "images/betty_boop.png";
	context.drawImage(outlineImage, drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight); 
};

outlineImage.onload = function () {
	context.drawImage(outlineImage, drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
};





