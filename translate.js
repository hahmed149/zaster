module.exports = {
  translateEngine: function(trString, callback)
  {
// Imports the Google Cloud client library
const Translate = require('@google-cloud/translate');

process.env['GOOGLE_APPLICATION_CREDENTIALS'] = "translate.json";

// Your Google Cloud Platform project ID
const projectId = 'earnest-trilogy-138223';

// Instantiates a client
// const translate = new Translate({
//   projectId: projectId,
// });
const translate = new Translate();

// The target language
const target = 'de';

// Translates some text into Russian
translate
  .translate(trString, target)
  .then(results => {

   let translations = results[0];


console.log('Translations:');
console.log(translations);
  callback(translations);
})

  .catch(err => {
    console.error('ERROR:', err);
    
  });
  }
}