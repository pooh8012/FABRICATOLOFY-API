const Product = require("../models/Product");

module.exports = {
  Query: {
    async product(_, { ID }) {
      return await Product.findById(ID);
    },
    async getProduct(_, { amount }) {
      return await Product.find();
    },
  },
  Mutation: {
    async createProduct(
      _,
      {
        productInput: {
          name: name,
          description: description,
          price: price,
          image: image,
          type: type,
        },
      }
    ) {
      const createdProduct = new Product({
        name,
        description,
        price,
        image,
        type,
      });

      const res = await createdProduct.save();
      return {
        id: res.id,
        ...res._doc,
      };
    },
    async deleteProduct(_, { ID }) {
      const wasDeleted = await (
        await Product.deleteOne({ _id: ID })
      ).deletedCount;
      return wasDeleted;
    },
    async editProduct(
      _,
      { ID, productInput: { name, description, price, image, type } }
    ) {
      const wasEdited = (
        await Product.updateOne(
          { _id: ID },
          {
            name: name,
            description: description,
            price: price,
            image: image,
            type: type,
          }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};
