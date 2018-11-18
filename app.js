// ES Modules syntax
import Unsplash, { toJson } from 'unsplash-js';

// Require syntax
const unsplash = require('unsplash-js').default;


const unsplash = new Unsplash ({
    applicationId: "{1149da19516c6f3662ec619486f7837f4dcc3e7f28035b0e2262d4798539ca5d}",
    secret: "{8dff27ce2b8ae5e9b28a352c1f758dbc66fd57e897b5704a65c4ee47ccddf29c}",
    callbackUrl: "{https://urn:ietf:wg:oauth:2.0:oob}"
});


function photos() {
  console.log("\nPhotos");

  unsplash.photos.getRandomPhoto({ featured: true })
    .then(toJson)
    .then(json => {
      console.log(json.links.html);
    });
}


unsplash.photos.getRandomPhoto({ featured: true })
  .then(toJson)
  .then(json => {
    console.log(json);
  });

unsplash.users.profile("naoufal")
    .catch(err => {
      // Your flawless error handling code
    });


// https://tyler.vc/random-unsplash-backgrounds
// https://www.youtube.com/watch?v=9HuNpF8FsXM
// https://stackoverflow.com/questions/52693138/unsplash-api-question-on-json-to-display-in-html
