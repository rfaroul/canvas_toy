var express = require('express'),
fs = require('fs'), //reads controllers and models files
request = require('request'), //simple way to make HTTP calls
app = express(),
exphbs = require('express-handlebars'),
logger = require('morgan'),
path = require('path'),
bodyParser = require('body-parser'); //parses JSON objects
root = __dirname;

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
