const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  properties: [String],
});

module.exports = mongoose.model("categories", categorySchema);
