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

router.put("/", upload.single("image"), ProductController.create);
router.get("/all", ProductController.getAll);
router.get("/:id", ProductController.getById);
router.delete("/", ProductController.deleteAll);

module.exports = router;
