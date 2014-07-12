// Dependencies Declarations
// =============================================================================
var express        = require('express');
var path           = require('path');
var logger         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var swig           = require('swig');

// Application Initialization
// =============================================================================
var app = express();

// Render Engine Configuration
// =============================================================================
app.engine('swig', swig.renderFile);
app.set('view engine', 'swig');
app.set('views', path.join(__dirname, 'views'));
app.set('view cache', false);
swig.setDefaults({ cache: false });

// Infrastructure Configuration
// =============================================================================
app.use(logger('dev'));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

// Server Configuration
// =============================================================================
var http = require('http').Server(app);
http.listen(3000, function () {
	console.log("Serverul este pornit pe portul 3000");
});