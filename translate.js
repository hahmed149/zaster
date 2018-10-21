module.exports = {
  translateEngine: function(stTranslate, callback)
  {
// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate');

process.env['GOOGLE_APPLICATION_CREDENTIALS'] = "translate.json";

// Your Google Cloud Platform project ID
const projectId = 'sonic-diorama-149616';

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
  .translate(stTranslate, target)
  .then(results => {
    const translation = results[0];

    console.log(`Text: ${stTranslate}`);
    console.log(`Translation: ${translation}`);
    callback(translation);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
}
}