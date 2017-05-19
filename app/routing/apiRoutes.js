
var data = require('../data/friends.js');
console.log(data)
module.exports =function (app) { 

 
 


app.get("/api/survey", function(req, res) {
  res.json(data);
});

app.post("/api/survey", function(req, res) {
  
   newcharacter = req.body;
  data.push(newcharacter);
 console.log(newcharacter);
 res.json(data);
});

};