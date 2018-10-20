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
  .labelDetection('C:\\Users\\Abdul\\Desktop\\download.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });