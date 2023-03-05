const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  type: String,
});

module.exports = model("Product", productSchema);
