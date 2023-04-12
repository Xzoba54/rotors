const ProductModel = require("../models/product.model");
const allowedQueryParams = require("../helpers/allowedProperties");

const getByCategory = async (req, res) => {
  const { category } = req.params;

  if (!category) return res.status(422).json({ message: "Category is required" });

  try {
    const products = await ProductModel.find({ category: category });

    return res.json({ products });
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getByCategory,
};
