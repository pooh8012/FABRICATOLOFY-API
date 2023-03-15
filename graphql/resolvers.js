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
          name,
          shortDescription,
          description,
          price,
          heroImage, // updated to use heroImage instead of image
          type,
          images, // added images field
        },
      }
    ) {
      const createdProduct = new Product({
        name,
        shortDescription,
        description,
        price,
        heroImage, // updated to use heroImage instead of image
        type,
        images, // added images field
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
      {
        ID,
        productInput: {
          name,
          shortDescription,
          description,
          price,
          heroImage,
          type,
          images,
        },
      }
    ) {
      const wasEdited = (
        await Product.updateOne(
          { _id: ID },
          {
            name,
            shortDescription,
            description,
            price,
            heroImage, // updated to use heroImage instead of image
            type,
            images, // added images field
          }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};
