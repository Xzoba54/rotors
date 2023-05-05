const CategoryModel = require("../models/category.model");

const create = async (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === "") return res.status(422).json({ message: "Name is required" });

  try {
    const newCategory = await CategoryModel.create({
      name: name,
      properties: req.body?.properties,
    });

    await newCategory.save();

    return res.status(201).json(newCategory);
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteAll = async (req, res) => {
  try {
    await CategoryModel.deleteMany({});

    return res.status(200).json({ message: "All categories deleted" });
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});

    return res.status(200).json(categories);
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  create,
  deleteAll,
  getAll,
};
