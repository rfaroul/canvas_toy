	var canvas = document.getElementById("coloringBook"); //grabbing the id assigned to the canvas element
	var context = canvas.getContext("2d"); //need the 2d rendering context for the drawing surface of a canvas element in order to draw on it


var paint; //global variable to be used later. (boolean)
var canvasWidth = 500; //have to set canvas width and height here to clear the canvas 
var canvasHeight = 375;
//set other canvas attributes in css 

context.lineWidth = 10;
context.lineJoin = context.lineCap = 'round';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// DRAW THE CANVAS  ////////////////

//////////// vertical lines ////////////
// for (var x = 0.5; x < 500; x += 10 ) {
// 	context.moveTo(x, 0);
// 	context.lineTo(x, 375);
// };

//////////// horizontal lines ////////////
// for (var y = 0.5; y < 375; y += 10 ) {
// 	context.moveTo(0, y);
// 	context.lineTo( 500, y);
// };

// context.strokeStyle = '#fff';
// context.stroke();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// SET COLORS  ////////////////
$('#blue').click(function () { currentColor = colorBlue; });
$('#red').click( function () { currentColor = red; });
$('#rawSienna').click(function () { currentColor = rawSienna; });
$('#orange').click(function () { currentColor = orange; });
$('#vividTangerine').click(function () { currentColor = vividTangerine; });
$('#yellow').click(function () { currentColor = yellow; });
$('#yellowGreen').click(function () { currentColor = yellowGreen; });
$('#green').click(function () { currentColor = green; });
$('#blueGreen').click(function () { currentColor = blueGreen; });
$('#blueViolet').click(function () { currentColor = blueViolet; });
$('#purple').click(function () { currentColor = purple; });
$('#redViolet').click(function () { currentColor = redViolet; });
$('#carnationPink').click(function () { currentColor = carnationPink; });
$('#brown').click(function () { currentColor = brown; });
$('#black').click(function () { currentColor = black; });
$('#burgundy').click(function () { currentColor = burgundy; });

var colorBlue = "#4997D0";
var red = "#ED0A3F";
var rawSienna = "#D27D46";
var orange = "#FF8833";
var vividTangerine = "#FF9980";
var yellow = "#FBE870";
var yellowGreen = "#C5E17A";
var green = "#3AA655";
var blueGreen = "#0095B7";
var blueViolet = "#6456B7";
var purple = "#6B3FA0";
var redViolet = "#BB3385";
var carnationPink = "#FFA6C9";
var brown = "#AF593E";
var black = "#000000";
var burgundy = "#800020";

var currentColor = colorBlue;
var clickColor = [];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// MOUSE DOWN EVENT (a javascript method) 
//when user clicks on canvas, record the position in an array via addClick function
crayonOn = $('#coloringBook').mousedown(function (event) {
var mouseX = event.pageX - this.offsetLeft; //event.pageX property returns position of the mouse pointer, relative to the left edge of the document.
var mouseY = event.pageY - this.offsetTop; //event.pageY property is relative to the top edge of the document.
paint = true; //lets us know if the virtual crayon is pressing down on the paper or not
	//if paint = true, record the value
addClick(mouseX, mouseY);
//UNCOMMENT FRIDAY 9:30AM
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
//crayon is off the paper
crayonOff = $('#coloringBook').mouseup(function(event) {
	paint = false;
	//COMMENT OUT AT 8:45 SAT
	//clickY.length = 0; //reset x coordinates
	//clickX.length = 0; //reset y coordinates
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// MOUSE LEAVE EVENT (a javascript method) 
//if the crayon goes off the paper
crayonOffCanvas = $('#coloringBook').mouseleave(function(event) {
	paint = false;
	//added 9:08AM SAT
	clickY.length = 0;
	clickX.length = 0;
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// ADDCLICK FUNCTION (saves the click position) 

var clickX = []; //saves X coordinates
var clickY = []; //saves Y coordinates
var clickDrag = []; //saves final position of crayon
//var paint;

var start_time;

function addClick(x, y, dragging) {
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
	clickColor.push(currentColor); //record the chosen color when the user clicks
}

$('#coloringBook').mousedown(start);
$('#coloringBook').mouseup(end);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// REDRAW FUNCTION (clears the canvas and redraws everything)
function redraw() {
	//UNCOMMENT @ 9:15AM
	//context.clearRect(0, 0, context.canvas.width, context.canvas.height); //clear the canvas
	context.lineJoin = "round";
	context.lineWidth = 5;

	console.log('redraw function called');
	// console.log('clickX array ', clickX);
	// console.log('clickY array ', clickY);

	for(var i=0; i < clickX.length; i++) {
		context.beginPath(); //doesn't work if it's on line 124. why?
		//MOVED FROM LINE 142
		if (clickDrag[i] && i) {
		context.moveTo(clickX[i-1], clickY[i-1]);
		} else {
			context.moveTo(clickX[i]-1, clickY[i]);
		}
		context.lineTo(clickX[i], clickY[i]);
		context.closePath();		
		context.strokeStyle = currentColor;
		context.stroke();	
		}
	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// CLEAR THE CANVAS //////////////////
function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height); // CanvasRenderingContext2D.clearRect() method of the Canvas 2D API sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.
	//canvas.width = canvas.width;
};

$('#eraseCanvas').click(clearCanvas);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// AUDIO CLICK EVENT FOR MULTIPLE SOUNDS //////////////////

var note = {
	chord: cMajor,
	soundLength: 12000
};

var note2 = {
	chord: fMajor,
	soundLength: 500
};

var note3 = {
	chord: fSharpMajor,
	soundLength: 1000
};

var song = [];
song.push(note, note2, note3);
console.log("notes", song); //array of 3 items

console.log("before the click event");


//exercise 
// var doThing = function(valueInFunction){

// 	//"valueInFunction" is a new value 
// 	console.log( "calling set timeout with: "+valueInFunction);
// 	setTimeout(function(){
// 		console.log("timeout, thing that happens later", valueInFunction )
// 	}, 1000)
	
// }


// for( var oldValue=0; oldValue<9; oldValue++){
// 	doThing(oldValue);
// 	console.log( "loop",oldValue);
// }







function playAudio ( userSong ) {
	//if (song.length != 0) { 
	console.log("inside click event callback");
	console.log( event ); 
		// if (song.length >= 1) {
		console.log("about to play");
		console.log(note, note2, note3);
		//song.push(note, note2, note3);
		console.log("song array", userSong); 
		currentNote = userSong.pop(); //playing one note over and over. WTF.
		console.log("popped", userSong); //song is a click event, not a function
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
	//}
	// else {
	// 	console.log("you're done!")
	// 	};
		//how to get it to stop
		// restart Audio when finished playing for specified length of time
};

$('#play').click( function(event){

	playAudio( song );
} );
// playAudio(song);
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// TIMER FUNCTIONS //////////////////

	function start() {
    	start_time = new Date();
    	// console.log('start time', start_time);
	}
	
var colorTime = []; //push array of [color, time] into here 

	function end() {
	    var end_time = new Date();
	    // console.log('now', end_time);
	    soundLength = end_time-start_time;
	    console.log(currentColor, soundLength);
	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// AUDIO CLICK EVENT FOR MULTIPLE SOUNDS //////////////////






//MEETING WITH AKIRA 5:30PM	
//OPTION 1
	//user clicks purple 
	//user draws with the purple crayon
	//purple = gMajor
	// var song = []; //empty array
	// song.push( { chord: gMajor, soundLength: 1000 })
	// 				note: ______ , 	time: _______


//OR OPTION2: 
//COULD HAVE A "NOTE" OBJECT
	// function Note (chord, time) {
	// 	this.chord = c; 
	// 	this.time = t;
	// 	this.poop = function() {
	// 		console.log(this.time);
	// 	};
	// }
	// var note = new Note(gMajor, 1000);
	// song.push(note); //push note object into the empty song array
	// note.poop();
	//difference with making a constructor is that you can add methods and do weird things with the objects


//////// TO MAKE THIS MORE READABLE AND ACCESSIBLE
// var redraw = require('redraw');
// module.exports = function redraw() {

//snapshot of canvas to save
//change button values to notes/chords













