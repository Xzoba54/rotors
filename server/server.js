require("./helpers/db");

const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));

const product = require("./routes/product.route");
const category = require("./routes/category.route");
app.use("/api/v1/product", product);
app.use("/api/v1/category", category);

app.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_TYPE") return res.status(422).json({ message: "Invalid file type" });
});

app.listen(5000, () => console.log("Listenign on port 5000"));
