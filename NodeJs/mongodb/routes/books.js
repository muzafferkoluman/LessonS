var express = require('express');
var router = express.Router();

/* Model. */
const Book = require('../models/Book');


router.post('/new', function(req, res, next) {
  const book = new Book({
    title:'Node Js',
    published: false,
    comments: [{ message:"Güzel bir kitap" },{ message: "Pek güzel değil" }],
    meta:{
      votes: 12,
      favs: 125
    }
  });
  book.save((err,data)=>{
    if(err)
      console.log(err);

    res.json(data);
  });
});

module.exports = router;
