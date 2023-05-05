const router = require("express").Router();
const ProductController = require("../controllers/product.controller");

const upload = require("../utils/multer");

router.put("/", ProductController.create);
router.get("/all", ProductController.getAll);
router.delete("/all", ProductController.deleteAll);
router.get("/:id", ProductController.getById);
router.patch("/:id/image", upload.single("image"), ProductController.updateProductImage);

module.exports = router;
