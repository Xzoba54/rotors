const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "categories",
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  properties: [
    {
      property: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        requried: true,
      },
    },
  ],
});

module.exports = mongoose.model("products", productSchema);
