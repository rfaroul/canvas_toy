var express = require('express'),
var fs = require('fs'), //reads controllers and models files
var request = require('request'), //simple way to make HTTP calls
var app = express(),
var exphbs = require('express-handlebars'),
var logger = require('morgan'),
var path = require('path'),
var bodyParser = require('body-parser'); //parses JSON objects
var root = __dirname;

app.listen(3000);

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));
app.set('views', path.join(root, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.use(logger('dev'));

fs.readdirSync('./controllers').forEach(function (file) {
	if(file.substr(-3) == '.js') {
		route = require('./controllers/' + file);
		console.log('this is the route', route);
		route.controller(app);
	}
});

//ROOT ROUTE
app.get('/', function(req, res) {
	res.render('home');
});
