const ProductModel = require("../models/product.model");
const CategoryModel = require("../models/category.model");
const mongoose = require("mongoose");
const fs = require("fs");

const create = async (req, res) => {
  const { name, categoryId, price, desc, brand } = req.body;

  if (!name || name.trim() === "") return res.status(422).json({ message: "Name is required" });
  if (!categoryId || categoryId.trim() === "") return res.status(422).json({ message: "Category is required(as an id)" });
  if (!price || typeof price === "number" || price <= 0) return res.status(422).json({ message: "Price is required(as a number)" });
  if (!desc || desc.trim() === "") return res.status(422).json({ message: "Desc is required" });
  if (!brand || brand.trim() === "") return res.status(422).json({ message: "Brand is required" });

  if (!mongoose.Types.ObjectId.isValid(categoryId)) return res.status(422).json({ message: "Invalid category id" });

  try {
    const category = await CategoryModel.findById(categoryId);
    if (!category) return res.status(404).json({ message: "Category not found" });

    const properties = req.body?.properties.filter((property) => property.key && property.value && category.properties.includes(property.key));

    const newProduct = await ProductModel.create({
      name: name,
      category: category,
      price: price,
      desc: desc,
      brand: brand,
      image: "http://localhost:5000/public/assets/not_available.png",
      properties: properties,
    });

    await newProduct.save();

    return res.status(201).json(newProduct);
    // return res.status(201).json({ message: "Product created successfully" });
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

const getAll = async (req, res) => {
  try {
    const products = await ProductModel.find({});

    return res.status(200).json(products);
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

const updateProductImage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(422).json({ message: "Invalid id" });

  try {
    const product = await ProductModel.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.image = `http://localhost:5000/${req.file.destination}/${req.file.filename}`;

    await product.save();

    return res.status(200).json("Product image updated successfully");
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(422).json({ message: "Id is required" });
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(422).json({ message: "Invalid id" });

  try {
    const product = await ProductModel.findById(id);

    return res.status(200).json(product);
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteAll = async (req, res) => {
  try {
    await ProductModel.deleteMany({});

    return res.status(200).json({ message: "Deleted all products" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  create,
  updateProductImage,
  getAll,
  getById,
  deleteAll,
};
