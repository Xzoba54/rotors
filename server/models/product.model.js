const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  quanity: { type: String, required: true },
  review: { type: Number, required: true },
  category: { type: String, required: true },
  producer: String,
  connectivity: String,
  backlight: Boolean,
  switchColor: String,
});

module.exports = mongoose.model("products", productSchema);
