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


//ROOT ROUTE
app.get('/', function(req, res) {
	res.render('home');
});
