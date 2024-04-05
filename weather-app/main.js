const request = require("request");
const dotenv = require("dotenv").config();
const city = process.argv[2];

const options = {
  url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`,
  method: "GET",
  json: true,
};

request(options, (error, res, body) => {
  console.log(`天気：${body.weather[0].main}`);
  console.log(`気温：${Math.round(body.main.temp)}℃`);
});
