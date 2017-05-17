// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Data
// ===========================================================
var data = [{
  name: "Yoda",
  email: "Jedi Master",
  data: [1, 2, 3, 4]
}];
 

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
// app.get("/", function(req, res) {
//   res.send("Welcome to the Star Wars Pages!ddddddd");
// });

//route to the home page...

var newcharacter;

app.use(express.static(path.join(__dirname, 'app/public')));

app.use("/node_modules", express.static('node_modules'));

 app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
 });

 // route to the survey page... 
 app.get("/survey", function(req, res) {
   res.sendFile(path.join(__dirname, "app/public/survey.html"));
 });

app.get("/api/survey", function(req, res) {
  res.json(data);
   

});

app.post("/api/survey", function(req, res) {
  
   newcharacter = req.body;
  data.push(newcharacter);
 console.log(newcharacter);
 res.json(data);
});

 

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

 
// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


// // Dependencies
// // =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = 3000;

// // Sets up the Express app to handle data parsing
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.text());
// // app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// // Waiting List (DATA)
// // =============================================================

// var totalSurveys = {
//   name: "india",
//   phone: "919-816-6990",
//   email: "india@gmail.com",
//   id: "test"
// };
// console.log(totalSurveys);
 

// // Routes
// // =============================================================

// // // Basic route that sends the user first to the AJAX Page
// // app.use(express.static(path.join(__dirname, 'app/public')));



// // app.use("/node_modules", express.static('node_modules'));
// // //route to the home page...
// // app.get("/", function(req, res) {
// //   res.sendFile(path.join(__dirname, "app/public/home.html"));
// // });

// // // route to the survey page... 
// // app.get("/survey", function(req, res) {
// //   res.sendFile(path.join(__dirname, "app/public/survey.html"));
// // });


// // provides the api for the json of surveys
// app.get("api/survey", function(req, res) {
//   res.send("Welcome");
//   totalSurveys={name:"name"};
//   res.json(totalSurveys);
//   console.log(totalSurveys);
// });

// // route to the wating list - provides JSON
// // app.get("/api/waitlist", function(req, res) {

// //   return res.json(waitingList);
// // });

// // Takes in JSON input of survey


// // app.post("app/public/api/survey", function(req, res) {
// //   var newsurvey = req.body;
// //   // newres.routeName = newres.name.replace(/\s+/g, "").toLowerCase();

// //   console.log(newsurvey);

// //     totalSurveys.push(newsurvey);

// //   res.json(totalSurveys);
// //   console.log(totalSurveys);
// // });

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });