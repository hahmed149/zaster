require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
const vision = require('./vision');
const tr = require('./translate');
let urlForImag;

const nasa_api = process.env.NASA_API;
const urlImageOfDay = 'https://api.nasa.gov/planetary/apod?api_key='+nasa_api;

app.get('/', function(req, res) {
  request(urlImageOfDay, function(error, response, body) {
     let data = JSON.parse(body).url;
     console.log(data);
    res.render('index', {data});
 
  });
});
//end api for background


const issLocation = 'http://api.open-notify.org/iss-now.json';
app.get('/iss', function(req, res) {
  request(issLocation, function(error, response, body) {
     let data2 = JSON.parse(body).iss_position;
     console.log (data2.latitude,data2.longitude);
     let latitude = data2.latitude;
     let longitude = data2.longitude;
     let stuff = `${latitude} and ${longitude}`;
     console.log(latitude,longitude);
    res.render('iss', {latitude, longitude});
  
 
  });
});
//end api for iss


//start vision api**************************

app.get('/info', function(req, res) {
  vision.visionEngine(urlForImag, function(labels) {
    console.log(labels);
    res.render('info', {labels});
    
  });
});

//end vision api


//Start translation API *************************
app.post('/info', function (req, res) {
  const stringToTranslate = req.body.city;
  console.log(req.body.city);
  tr.translateEngine(stringToTranslate, function(translation){
    console.log(translation);
    res.render('translation', {translation});

    
  })
  
})


//End translation API******************************



app.get('/coordinates', function(req, res) {
  request(issLocation, function(error, response, body) {
    let data2 = JSON.parse(body).iss_position;
    let latitude = data2.latitude;
    let longitude = data2.longitude;
    res.json({latitude: latitude, longitude: longitude});
 

 });
})


//end api for iss

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})