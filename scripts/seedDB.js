const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
  );

  const bookSeed = [
      {
          title: "The Book of Lies",
          author: "Aleister Crowley",
          image: "http://books.google.com/books/content?id=FgeuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          description: "The iron-hard logic and esoteric wisdom of the Great Beast is presented herein, in a veritable magickal working of an occult tome--a literary dip into the thaumaturgical waters of the psychic and arcane that will confound and delight the ..."
      }
  ]

  db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  
  