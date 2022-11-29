//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");

});

app.post("/", function(req, res) {

  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  console.log(firstName, lastName, email);
})

app.listen(3000, function() {
  console.log("Server is running on port 3000");

})
// API KEY
// 170779bc1d5b4022ddb5a036d8967712-us21

// Audience ID or list // IDEA:
// f6edc6f718
