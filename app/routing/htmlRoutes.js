exports.files = function(){


var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static(path.join(__dirname, 'app/public')));

app.use("/node_modules", express.static('node_modules'));

 app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
 });

 // route to the survey page... 
 app.get("/survey", function(req, res) {
   res.sendFile(path.join(__dirname, "app/public/survey.html"));
 });

};
 