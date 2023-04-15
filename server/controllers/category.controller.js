const CategoryModel = require("../models/category.model");

const create = async (req, res) => {
  const { name, properties } = req.body;

  try {
    const newCategory = await CategoryModel.create({
      name: name,
      properties: properties.map((prop) => ({
        name: prop.name,
      })),
    });

    await newCategory.save();

    return res.json(newCategory);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteAll = async (req, res) => {
  try {
    await CategoryModel.deleteMany({});

    return res.json({ message: "Deleted all" });
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});

    return res.json(categories);
  } catch (e) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  create,
  deleteAll,
  getAll,
};
