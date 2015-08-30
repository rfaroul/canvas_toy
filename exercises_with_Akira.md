
to understand recursive functions:


 var doThing = function(valueInFunction){

 	"valueInFunction" is a new value 
 	console.log( "calling set timeout with: "+valueInFunction);
 	setTimeout(function(){
 		console.log("timeout, thing that happens later", valueInFunction )
 	}, 1000)
	
 }


 for( var oldValue=0; oldValue<9; oldValue++){
 	doThing(oldValue);
 	console.log( "loop",oldValue);
 }



 MEETING WITH AKIRA 5:30PM	
OPTION 1
	user clicks purple 
	user draws with the purple crayon
	purple = gMajor
	 var song = []; empty array
	 song.push( { chord: gMajor, soundLength: 1000 })
	 				note: ______ , 	time: _______


OR OPTION2: 
COULD HAVE A "NOTE" OBJECT
	 function Note (chord, time) {
	 	this.chord = c; 
	 	this.time = t;
	 	this.poop = function() {
	 		console.log(this.time);
	 	};
	 }
	 var note = new Note(gMajor, 1000);
	 song.push(note); push note object into the empty song array
	 note.poop();
	difference with making a constructor is that you can add methods and do weird things with the objects


 TO MAKE THIS MORE READABLE AND ACCESSIBLE
 var redraw = require('redraw');
 module.exports = function redraw() {

snapshot of canvas to save
change button values to notes/chords