var Drawing = require('../models/drawing.js').Drawing;

module.exports.controller = function(app) {

	//DRAWING INDEX PAGE - returns all drawings
	app.get('/gallery', function (req, res) {
		Drawing.all(function( data ) { //calls "all" function in db.js file
			res.render('drawingIndex', { drawings : data } );
		});
	});

	//Drawing - NEW
	app.get('/drawings/new', function(req, res) {
		res.render('drawingNew');
	});

	//Drawing - SHOW
	app.get('/gallery/:id', function (req, res) {
		Drawing.getDrawings(req.params.id, function(drawingObj) {
		res.render('drawingShow', drawingObj);
		});
	});

	//Drawing - CREATE
	app.post('/drawings', function (req, res) {
		Drawing.create(req.body, function (data) {
			res.redirect('/drawings');
		});
	});

	//Drawing - UPDATE
	app.put('/drawings/:id', function (req, res) {
		Drawing.update(req.params.id, req.body, function (data) {
			res.redirect('/drawings/' + req.params.id);
		});
	});
};













