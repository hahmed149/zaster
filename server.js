
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

const urlImageOfDay = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

app.get('/', function(req, res) {
  request(urlImageOfDay, function(error, response, body) {
     let data = JSON.parse(body).hdurl;
    res.render('index', {data});
 
  });
});
//end api for background


const issLocation = 'http://api.open-notify.org/iss-now.json';
app.get('/', function(req, res) {
  request(issLocation, function(error, response, body) {
     let data2 = JSON.parse(body).iss_position;
     console.log (data2);
    res.render('iss', {data2:latitude, data2:longitude});
    
 
  });
});
//end api for iss

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})