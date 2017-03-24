var express = require('express');
//var connect = require('connect');
var path = require('path');
var app = express();

// Configuration 

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

//app.use(express.favicon());
//app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));
//app.use(connect.logger('dev'));
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
//app.use(connect.json());
//app.use(connect.urlencoded());
// Routes  
//app.get('/', routes.index);
require('./routes/routes.js')(app);
var port = process.env.PORT || 7000;
app.listen(port);

console.log('The App runs on port ' + port);