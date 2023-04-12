const ProductModel = require("../models/product.model");
const allowedQueryParams = require("../helpers/allowedProperties");

const add = async (req, res) => {
  const { name, desc, price, quanity, category } = req.body;

  try {
    if (!name || !desc || !price || !quanity || !category) return res.status(422).json({ message: "Invalid data" });

    const allowedProperties = ["producer", "connectivity", "backlight", "switchColor"];

    const properties = {};
    allowedProperties.forEach((property) => {
      if (!req.body[property]) return;

      properties[property] = req.body[property];
    });

    const defaultData = {
      name: name,
      desc: desc,
      price: price,
      quanity: quanity,
      category: category,
      review: 0,
      image: `http://localhost:5000/public/uploads/products/${req.file.filename}`,
    };

    const model = { ...defaultData, ...properties };
    const newProduct = await ProductModel.create(model);

    await newProduct.save();

    return res.json(newProduct);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Server error" });
  }
};

const getAll = async (req, res) => {
  // const delay = (t) => new Promise((res) => setTimeout(res, t * 1000));

  // await delay(3);

  try {
    const filter = {};

    allowedQueryParams.forEach((param) => {
      if (!req.query[param] || param === "limit") return;

      filter[param] = req.query[param];
    });

    const limit = parseInt(req.query.limit) || 0;
    const products = await ProductModel.find(filter).limit(limit);

    return res.json(products);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteAll = async (req, res) => {
  try {
    await ProductModel.deleteMany();

    return res.json({ message: "Deleted all" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(422).json({ message: "Id is required" });

  try {
    await ProductModel.findByIdAndDelete(id);

    return res.json({ message: "Deleted" });
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

module.exports = {
  add,
  getAll,
  deleteAll,
  deleteById,
  getById,
};
