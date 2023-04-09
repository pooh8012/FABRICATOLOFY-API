const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  _id: String,
  name: String,
  shortDescription: String,
  description: String,
  price: Number,
  heroImage: String,
  type: String,
  images: [
    {
      type: String,
    },
  ],
});

module.exports = model("Product", productSchema);
