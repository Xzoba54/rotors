const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/rotors");

    console.log("Connected to mongodb");
  } catch (e) {
    console.log(e);
  }
};

connect();

module.exports = mongoose.connect;
