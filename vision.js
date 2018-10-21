module.exports = {
visionEngine : function(urlImg, callback)
{
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

process.env['GOOGLE_APPLICATION_CREDENTIALS'] = "vision.json";

// Your Google Cloud Platform project ID
const projectId = 'earnest-trilogy-138223';


// Creates a client
const client = new vision.ImageAnnotatorClient({
    projectId: projectId,
  });




// Performs label detection on the image file
client
  .labelDetection('https://apod.nasa.gov/apod/image/1810/NGC6543-BYU-L.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
      callback(labels) ;
  })
  .catch(err => {
    console.error('ERROR:', err);
    return null;
  });
}
}