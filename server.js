// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, 'app/public')));
app.use("/node_modules", express.static('node_modules'));
 
// ===========================================================

 var data=require("./app/data/friends.js");
 

//route to the home page...

var newcharacter;

// routing html ....

require('./app/routing/apiRoutes.js')(app);

require('./app/routing/htmlRoutes.js')(app);


 
 
// Listener
// ===========================================================
app.listen(PORT, function() {
   
});

 