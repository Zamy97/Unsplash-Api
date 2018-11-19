// ES Modules syntax
import Unsplash from 'unsplash-js';

// require syntax
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
    applicationId:"{1149da19516c6f3662ec619486f7837f4dcc3e7f28035b0e262d4798539ca5d}",
    secret: "{8dff27ce2b8ae5e9b28a352c1f758dbc66fd57e897b5704a65c4ee47ccddf29c}",
    callbackUrl: "{http://unsplash-js.herokuapp.com}"
});

let authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos",
  "write_likes",
  "read_collections",
  "write_collections"
]);

console.log(userAuthentication(code));
currentUser();
users();
photos();
collections();
stats();

function userAuthentication(code) {
    return unsplash.auth.userAuthentication(code)
        .then(toJson)
        .then(json => json.access_token);
}

function currentUser() {
    console.log("\nCurrent User");

      unsplash.currentUser.profile()
        .then(toJson)
        .then(json => {
          console.log('profile', json);
        });

      unsplash.currentUser.updateProfile({ location: "¯\_(ツ)_/¯" })
        .then(toJson)
        .then(json => {
          console.log('updateProfile', json);
        });
}

function users() {
    console.log("\nUsers")

      unsplash.users.profile('naoufal')
        .then(toJson)
        .then(json => {
          console.log(json);
        });

      unsplash.users.photos("naoufal")
        .then(toJson)
        .then(json => {
          console.log(json);
        });

      unsplash.users.likes("naoufal")
        .then(toJson)
        .then(json => {
          console.log(json);
         });
}

function photos() {
    console.log("\nPhotos");

      unsplash.photos.listPhotos(1, 10)
        .then(toJson)
        .then(json => {
          console.log(json);
        });

      unsplash.photos.searchPhotos("bear", undefined, 1, 1)
        .then(toJson)
        .then(json => {
          console.log(json);
        });

      unsplash.photos.getPhoto("kZ8dyUT0h30")
        .then(toJson)
        .then(json => {
          console.log(json);
        });

      unsplash.photos.getRandomPhoto({ query: "food" })
        .then(toJson)
        .then(json => {
          console.log(json.links.html);
        });

      unsplash.photos.likePhoto("kZ8dyUT0h30")
        .then(toJson)
        .then(json => {
          console.log(json);
        });

      unsplash.photos.unlikePhoto("kZ8dyUT0h30")
        .then(toJson)
        .then(json => {
          console.log(json);
        });
}

function categories() {
    console.log("\nCategories");

      unsplash.categories.listCategories()
        .then(toJson)
        .then(json => {
          console.log(json);
        });

      unsplash.categories.category(4)
        .then(toJson)
        .then(json => {
          console.log(json);
        });

      unsplash.categories.categoryPhotos(4, 1, 1)
        .then(toJson)
        .then(json => {
          console.log(json);
        });
}

function collections() {
    console.log("\nCollections");

       unsplash.collections.listCollections(1, 10)
         .then(toJson)
         .then(json => {
           console.log(json);
         });

       unsplash.collections.listCuratedCollections(1, 10)
         .then(toJson)
         .then(json => {
           console.log(json);
         });

       unsplash.collections.getCollection(151165)
         .then(toJson)
         .then(json => {
           console.log(json);
         });

       unsplash.collections.getCuratedCollection(94)
         .then(toJson)
         .then(json => {
           console.log(json);
         });


       unsplash.collections.getCollectionPhotos(151165)
         .then(toJson)
         .then(json => {
           console.log(json);
         });

       unsplash.collections.getCuratedCollectionPhotos(94)
         .then(toJson)
         .then(json => {
           console.log(json);
         });

       unsplash.collections.createCollection("Birds", "Wild birds from 'round the world", true)
         .then(toJson)
         .then(json => {
           console.log(json);
         });

       unsplash.collections.updateCollection(152645, "Wild", "Wild")
         .then(toJson)
         .then(json => {
           console.log(json);
         });

       unsplash.collections.deleteCollection(152645)
         .then(toJson)
         .then(json => {
           console.log(json);
         });

       unsplash.collections.addPhotoToCollection(151165, '-yPg8cusGD8')
         .then(toJson)
         .then(json => {
           console.log(json);
         });

       unsplash.collections.removePhotoFromCollection(151165, '-yPg8cusGD8')
         .then(toJson)
         .then(json => {
           console.log(json);
         });
}

function stats() {
    console.log("\nStats");

       unsplash.stats.total()
        .then(toJson)
        .then(json => {
          console.log(json);
        });
}


// Everything below was what I tried at the beginning

// ES Modules syntax
import Unsplash from 'unsplash-js';

// Require syntax
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
     applicationId:"{1149da19516c6f3662ec619486f7837f4dcc3e7f28035b0e262d4798539ca5d}",
    secret: "{8dff27ce2b8ae5e9b28a352c1f758dbc66fd57e897b5704a65c4ee47ccddf29c}",
    callbackUrl: "{http://unsplash-js.herokuapp.com}"
});

unsplash.photos.getRandomPhoto({ query: "food" })
  .then(toJson)
  .then(json => {
      console.log(toJson);
    // Your code
  });


// https://tyler.vc/random-unsplash-backgrounds
// https://www.youtube.com/watch?v=9HuNpF8FsXM
// https://stackoverflow.com/questions/52693138/unsplash-api-question-on-json-to-display-in-html
