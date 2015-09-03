var pg = require('pg');
var dbUrl = 'pg://localhost/canvas_toy_development'

module.exports = {
	end: function() {
		pg.end();
	},
	all: function(table, cb) {
		pg.connect(dbUrl, function(err, client, done) {
			client.query('SELECT * FROM ' + table, function(err, result) {
				done();
				cb(result.rows);
			});
		});
		this.end();
	},
	find: function(table, id, cb) {
		pg.connect(dbUrl, function(err, client, done) {
			client.query('SELECT * FROM ' + table + 'WHERE id=' + id, function(err, result) {
				done();
				cb(result.rows);
			})
		})
	}

}