require('es6-promise').polyfill();
require('isomorphic-fetch');

// // ES Modules syntax
// import Unsplash, { toJson } from 'unsplash-js';

// Require syntax
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
    applicationId:"58542430bee9cfc91faa9dd2a463994315a568c02e82f60ced38b44a45a86f55",
    secret: "2eb81bf8ac1736f007d1d8dff32dff131cbee93039f6fda0be87ed861ae868f9",
    callbackUrl: "http://unsplash-js.herokuapp.com"
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

// console.log(userAuthentication(code));
// currentUser();
// users();
photos();
// collections();
// stats();

function userAuthentication(code) {
  return unsplash.auth.userAuthentication(code)
    .then(toJson)
    .then(json => json.access_token);
}

// function currentUser() {
//   console.log("\nCurrent User");
//
//   unsplash.currentUser.profile()
//     // .then(toJson)
//     .then(json => {
//       console.log('profile', json);
//     });
//
//   unsplash.currentUser.updateProfile({ location: "¯\_(ツ)_/¯" })
//     // .then(toJson)
//     .then(json => {
//       console.log('updateProfile', json);
//     });
// }

// function users() {
//   console.log("\nUsers")
//
//   unsplash.users.profile('naoufal')
//     // .then(toJson)
//     .then(json => {
//       console.log(json);
//     });
//
//   unsplash.users.photos("naoufal")
//     // .then(toJson)
//     .then(json => {
//       console.log(json);
//     });
//
//   unsplash.users.likes("naoufal")
//     // .then(toJson)
//     .then(json => {
//       console.log(json);
//      });
// }

function photos() {
  console.log("\nPhotos");

  unsplash.photos.listPhotos(1, 10)
    // .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.photos.searchPhotos("bear", undefined, 1, 1)
    // .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.photos.getPhoto("kZ8dyUT0h30")
    // .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.photos.getRandomPhoto({ featured: true })
    // .then(toJson)
    .then(json => {
      console.log(json.links.html);
    });

  unsplash.photos.likePhoto("kZ8dyUT0h30")
    // .then(toJson)
    .then(json => {
      console.log(json);
    });

  unsplash.photos.unlikePhoto("kZ8dyUT0h30")
    // .then(toJson)
    .then(json => {
      console.log(json);
    });
}

// function categories() {
//   console.log("\nCategories");
//
//   unsplash.categories.listCategories()
//     // .then(toJson)
//     .then(json => {
//       console.log(json);
//     });
//
//   unsplash.categories.category(4)
//     // .then(toJson)
//     .then(json => {
//       console.log(json);
//     });
//
//   unsplash.categories.categoryPhotos(4, 1, 1)
//     // .then(toJson)
//     .then(json => {
//       console.log(json);
//     });
// }

// function collections() {
//   console.log("\nCollections");
//
//    unsplash.collections.listCollections(1, 10)
//      // .then(toJson)
//      .then(json => {
//        console.log(json);
//      });
//
//    unsplash.collections.listCuratedCollections(1, 10)
//      // .then(toJson)
//      .then(json => {
//        console.log(json);
//      });
//
//    unsplash.collections.getCollection(151165)
//      // .then(toJson)
//      .then(json => {
//        console.log(json);
//      });
//
//    unsplash.collections.getCuratedCollection(94)
//      // .then(toJson)
//      .then(json => {
//        console.log(json);
//      });
//
//
//    unsplash.collections.getCollectionPhotos(151165)
//      // .then(toJson)
//      .then(json => {
//        console.log(json);
//      });
//
//    unsplash.collections.getCuratedCollectionPhotos(94)
//      // .then(toJson)
//      .then(json => {
//        console.log(json);
//      });
//
//    unsplash.collections.createCollection("Birds", "Wild birds from 'round the world", true)
//      // .then(toJson)
//      .then(json => {
//        console.log(json);
//      });
//
//    unsplash.collections.updateCollection(152645, "Wild", "Wild")
//      // .then(toJson)
//      .then(json => {
//        console.log(json);
//      });
//
//    unsplash.collections.deleteCollection(152645)
//      // .then(toJson)
//      .then(json => {
//        console.log(json);
//      });
//
//    unsplash.collections.addPhotoToCollection(151165, '-yPg8cusGD8')
//      // .then(toJson)
//      .then(json => {
//        console.log(json);
//      });
//
//    unsplash.collections.removePhotoFromCollection(151165, '-yPg8cusGD8')
//      // .then(toJson)
//      .then(json => {
//        console.log(json);
//      });
// }

// function stats() {
//   console.log("\nStats");
//
//    unsplash.stats.total()
//     // .then(toJson)
//     .then(json => {
//       console.log(json);
//     });
// }

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
