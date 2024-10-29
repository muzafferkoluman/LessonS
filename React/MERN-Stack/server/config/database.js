const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect("mongodb://localhost:27017/mernDB", 
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
    )
    .then(() => {
      console.log("mongoDB connected");
    })
    .catch((err) => {
      console.log(`mongoDB not connected ${err}`);
    });
};

module.exports = database;
