var canvas = document.getElementById("coloringBook"); //grabbing the id assigned to the canvas element
var context = canvas.getContext("2d"); //need the 2d rendering context for the drawing surface of a canvas element in order to draw on it
// context.globalCompositeOperation = 'multiply';

var paint; //(boolean)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////  PREPARE THE CANVAS  ////////////////
var canvasWidth = 500; //have to set canvas width and height here to clear the canvas 
var canvasHeight = 375; 
var currentNote;

context.lineJoin = context.lineCap = 'round';


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

var currentColor = '#FFFFFF';
var clickColor = [];

var drawingAreaX;
var drawingAreaY;
var drawingAreaWidth;
var drawingAreaHeight;

$('#color1').click(function () { currentColor = color1; currentNote = aFlat; });
	//add sound to click event.
	//option to play sound for each color while coloring
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


var outlineImage = new Image(); //outlineImage = image to color
// var drawingAreaX = 111;
// var drawingAreaY = 11;
// var drawingAreaWidth = 267;
// var drawingAreaHeight = 200;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// MOUSE DOWN EVENT (a javascript method) 
//when user clicks on canvas, record the position in an array via addClick function
	crayonOn = $('#coloringBook').mousedown(function (event) {
	var mouseX = event.pageX - this.offsetLeft; //event.pageX property returns position of the mouse pointer, relative to the left edge of the document.
	var mouseY = event.pageY - this.offsetTop; //event.pageY property is relative to the top edge of the document.
	
	paint = true; //lets us know if the virtual crayon is pressing down on the paper or not
		//if paint = true, record the value
	addClick(mouseX, mouseY);

	redraw(); //to update the canvas
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// MOUSE MOVE EVENT (a javascript method) 
//draw on the canvas when user is pressing down
//GLOBAL VARIABLES mouseX and mouseY

	crayonMove = $('#coloringBook').mousemove(function(event) {
		if(paint) {
			addClick(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
			redraw();
		}
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// MOUSE UP EVENT (a javascript method) 
//crayon is off the paper but still hovering over the canvas
	crayonOff = $('#coloringBook').mouseup(function(event) {
		paint = false;
		
		clickY.length = 0; //reset x coordinates
		clickX.length = 0; //reset y coordinates
		console.log('end of mouseup', currentColor, soundLength); //soundLength is undefined here
		//UNSURE ABOUT THIS 9/22 9:36PM
		// redraw();
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// MOUSE LEAVE EVENT (a javascript method) 
//if the crayon goes off the paper
	crayonOffCanvas = $('#coloringBook').mouseleave(function(event) {
		paint = false;
		//with 109+110 colors don't change

		clickY.length = 0;
		clickX.length = 0;
		console.log('end of mouseleave function', currentColor, soundLength); 
	});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// ADDCLICK FUNCTION (saves the click position) 

var clickX = []; //saves X coordinates
var clickY = []; //saves Y coordinates
var clickDrag = []; //saves final position of crayon
//COMMENTED 9/22 9:46PM
//var paint;

function addClick(x, y, dragging) {
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
	clickColor.push(currentColor); //record the chosen color when the user clicks
	
	//COMMENTED OUT tuesday 6:39pm
	// redraw();
}

$('#coloringBook').mousedown(start);
$('#coloringBook').mouseup(end);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// REDRAW FUNCTION (clears the canvas and redraws everything)
// var hasBeenClicked = false; DON'T THINK I NEED THIS

function redraw() {

	context.strokeStyle = currentColor;
	context.lineWidth = 3;
	context.lineJoin = "round";

	console.log('redraw function called');

	for(var i=0; i < clickX.length; i++) {
		context.beginPath(); //doesn't work if it's on line 124. why?
		if (clickDrag[i] && i) {
		context.moveTo(clickX[i-1], clickY[i-1]);
		} else {
			context.moveTo(clickX[i]-1, clickY[i]);
		}
		context.lineTo(clickX[i], clickY[i]);
		context.closePath();
		context.stroke();		
	}
		
		context.restore();

		context.globalAlpha = 1;

		
		//drawingAreaX = where to put the top-left corner of the source image (x-coordinate)
		//drawingAreaY = where to put the top-left corner of the source image (y-coordinate)
		//drawingAreaWidth = the width to draw the image in the destination  canvas
		//drawingAreaHeight = the height to draw the image in the destination canvas

};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// CLEAR THE CANVAS //////////////////
function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height); // CanvasRenderingContext2D.clearRect() method of the Canvas 2D API sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.
	//canvas.width = canvas.width;
};

$('#eraseCanvas').click(clearCanvas);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// SAVE THE DRAWING/CANVAS STATE //////////////////
//want to save the canvas state 
//save image as data url (png format by default)
var link = document.createElement('a');
// link.innerHTML = 'download image';
link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);
document.body.appendChild(link);
$('a').addClass('download');



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
		// restart Audio when finished playing for specified length of time
};

$('#play').click( function(event){

	playAudio( song );
} );
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// TIMER FUNCTIONS //////////////////
var start_time;

var soundLength;

	function start () {
		start_time = new Date();
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










