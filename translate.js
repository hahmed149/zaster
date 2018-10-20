// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate');

process.env['GOOGLE_APPLICATION_CREDENTIALS'] = "C:\\Users\\Abdul\\Desktop\\Project key\\My Project-4105dfa87914.json";

// Your Google Cloud Platform project ID
const projectId = 'earnest-trilogy-138223';

// Instantiates a client
const translate = new Translate({
  projectId: projectId,
});

// The text to translate
const text = 'Hello, world!';
// The target language
const target = 'es';

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