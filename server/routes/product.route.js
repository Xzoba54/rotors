const router = require("express").Router();
const ProductController = require("../controllers/product.controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/products");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

router.put("/new", upload.single("image"), ProductController.add);
router.get("/all", ProductController.getAll);
router.delete("/all", ProductController.deleteAll);
router.get("/:id", ProductController.getById);
router.delete("/:id", ProductController.deleteById);

module.exports = router;
