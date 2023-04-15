const router = require("express").Router();
const CategoryController = require("../controllers/category.controller");

router.put("/", CategoryController.create);
router.delete("/", CategoryController.deleteAll);
router.get("/", CategoryController.getAll);

module.exports = router;
