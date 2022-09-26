// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response) {
  response.send("<h1>Hello world!</h1>");

});

app.get("/contact", function(req, res){
  res.send("Contact me at : artych@gmail.com");
})

app.get("/about", function(req, res){
  res.send("This is the story about me. I love to solve problems!")
})

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</li><li>Code</li><li>Food</li></ul>")
})

app.listen(3000, function() {
  console.log("Server has started on port 3000");
});
