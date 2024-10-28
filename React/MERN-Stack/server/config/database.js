const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect("MONGO_URL", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoDB connected");
    })
    .catch((err) => {
      console.log(`mongoDB not connected ${err}`);
    });
};

module.exports = database;
