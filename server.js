
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

app.get('/', function(req, res) {
  request(url, function(error, response, body) {
     let data = JSON.parse(body).hdurl;
    res.render('index', {data});
 
  });
});
//end api for background

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})