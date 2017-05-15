// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Waiting List (DATA)
// =============================================================
var reservations = [{
  name: "india",
  phone: "919-816-6990",
  email: "india@gmail.com",
  id: "test"
}];

var waitingList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.use(express.static(path.join(__dirname, 'app/public')));



app.use("/node_modules", express.static('node_modules'));
//route to the home page...
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// route to the survey page... 
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


// provides the api for the json of surveys
app.get("/api/survey", function(req, res) {

  return res.json(totalSurveys);
});

// route to the wating list - provides JSON
// app.get("/api/waitlist", function(req, res) {

//   return res.json(waitingList);
// });

// Takes in JSON input of survey
app.post("app/survey", function(req, res) {
  var newsurvey = req.body;
  // newres.routeName = newres.name.replace(/\s+/g, "").toLowerCase();

  console.log(newsurvey);

    surveyTotal.push(newsurvey);

  res.json(newsurvey);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});