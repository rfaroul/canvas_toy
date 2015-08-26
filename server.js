var express = require('express'),
 fs = require('fs'),
 request = require('request'),
 app = express(),
 exphbs = require('express-handlebars'),
 logger = require('morgan'),
 path = require('path'),
 bodyParser = require('body-parser');
 var root = __dirname;

app.listen(3000);

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));
app.set('views', path.join(root, 'views'));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(logger('dev'));

//ROOT ROUTE
app.get('/', function(req, res) {
	res.render('home');
})

// 
