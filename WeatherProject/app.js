const express = require("express");

const app = express();

const https = require('https');

app.get("/", function(req, res) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=b24cf0e68d46e76d85a379471336de84&units=metric"

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temperature = weatherData.main.temp
      const location = weatherData.name
      const weatherDescription = weatherData.weather[0].description
      const icon_url = "http://openweathermap.org/img/wn/" + 10d@2x + ".png"
      res.write("<p>The weather is currently " + weatherDescription + "</p>")
      res.write("<h1>The temperature in " + location + " is " + temperature + " degrees celcious </h1>")
      res.send();
    })
  })
})















app.listen(3000, function() {
  console.log("Server is running on port 3000");

})
