const ProductModel = require("../models/product.model");
const CategoryModel = require("../models/category.model");

const create = async (req, res) => {
  let { properties } = req.body;
  properties = JSON.parse(properties);

  try {
    const category = await CategoryModel.findOne({ name: req.body.category });
    if (!category) return res.status(404).json({ message: "No category found" });

    const newProduct = await ProductModel.create({
      name: req.body.name,
      category: category._id,
      price: req.body.price,
      desc: req.body.desc,
      image: `http://localhost:5000/${req.file.destination}/${req.file.filename}`,
      properties: properties.properties
        .map((prop) => {
          // if (category.properties.some((cprop) => cprop.name === Object.keys(prop)[0])) return;

          return {
            property: Object.keys(prop)[0],
            value: Object.values(prop)[0],
          };
        })
        .filter(Boolean),
    });

    await newProduct.save();

    return res.json(newProduct);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Server error" });
  }
};

const getAll = async (req, res) => {
  try {
    const products = await ProductModel.find({});

    return res.json(products);
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.findById(id);

    return res.json(product);
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteAll = async (req, res) => {
  try {
    const products = await ProductModel.deleteMany({});

    return res.json({ message: "Deleted all products" });
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  deleteAll,
};
