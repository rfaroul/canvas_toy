var db = require('../db.js');

module.exports.Drawing = {
	create: function(postObj, callback) {
		db.create('drawings', postObj, function (data) {
			callback( data );
		});
	},

	update: function(id, postObj, callback) {
		db.update( 'drawings', postObj, id, function (data) {
			callback( data );
		});
	},

	all: function( callback) {
		db.all('drawings', function (data) {
			callback( data );
		});
	},

	getDrawings: function( id, callback) {
		db.find('drawings', id, function (data) {
			callback (data);
		});
	}

}