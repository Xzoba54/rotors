require("./helpers/db");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));

const product = require("./routes/product.route");
app.use("/api/v1/product", product);
const category = require("./routes/category.route");
app.use("/api/v1/category", category);

app.listen(5000, () => console.log("Listenign on port 5000"));
