const router = require("express").Router();
const CategoryController = require("../controllers/category.controller");

router.get("/:category", CategoryController.getByCategory);

module.exports = router;
