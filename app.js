require('es6-promise').polyfill();
require('isomorphic-fetch');

// Require syntax
const Unsplash = require('unsplash-js').default;

const toJson = require("unsplash-js").toJson;

const unsplash = new Unsplash({
    applicationId:"58542430bee9cfc91faa9dd2a463994315a568c02e82f60ced38b44a45a86f55",
    secret: "2eb81bf8ac1736f007d1d8dff32dff131cbee93039f6fda0be87ed861ae868f9",
    callbackUrl: "http://unsplash-js.herokuapp.com"
});

photos();

function photos() {
  console.log("\nPhotos");

  unsplash.photos.getRandomPhoto({ featured: true })
    .then(toJson)
    .then(json => {
      console.log(json);
    });
}

// https://tyler.vc/random-unsplash-backgrounds
// https://www.youtube.com/watch?v=9HuNpF8FsXM
// https://stackoverflow.com/questions/52693138/unsplash-api-question-on-json-to-display-in-html
// https://github.com/unsplash/unsplash-source-js
//https://github.com/unsplash/unsplash-js
//https://github.com/unsplash/unsplash-js/tree/master/examples/node/config
//https://github.com/unsplash/unsplash-source-js
//https://unsplash.com/documentation#get-a-random-photo
//https://stackoverflow.com/questions/52693138/unsplash-api-question-on-json-to-display-in-html
//https://stackoverflow.com/questions/33704714/cant-require-default-export-value-in-babel-6-x/33705077#33705077
//
