
const express = require("express");
const https = require('https');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apikey = "b24cf0e68d46e76d85a379471336de84";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + unit + "";

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temperature = weatherData.main.temp;
      const location = weatherData.name;
      const weatherDescription = weatherData.weather[0].description;
      const icon_url = weatherData.weather[0].icon;
      const image_url = "http://openweathermap.org/img/wn/" + icon_url + "@2x.png";
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<h1>The temperature in " + location + " is " + temperature + " degrees celcious </h1>");
      res.write("<img src=" + image_url + ">");
      res.send();
    })
  })
})


app.listen(3000, function() {
  console.log("Server is running on port 3000");

})
