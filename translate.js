// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate');

process.env['GOOGLE_APPLICATION_CREDENTIALS'] = "translate.json";

// Your Google Cloud Platform project ID
const projectId = 'valued-watch-220108';

// Instantiates a client
const translate = new Translate({
  projectId: projectId,
});

// The text to translate
const text = 'Hello, world!';
// The target language
const target = 'de';

// Translates some text into Russian
translate
  .translate(text, target)
  .then(results => {
    const translation = results[0];

    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });