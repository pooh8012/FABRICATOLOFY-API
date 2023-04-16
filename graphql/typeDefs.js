const { gql } = require("apollo-server");

module.exports = gql`
  type Product {
    name: String
    shortDescription: String
    description: String
    price: Int
    heroImage: String
    type: String
    images: [String]
  }

  input ProductInput {
    _id: String
    name: String
    shortDescription: String
    description: String
    price: Int
    heroImage: String
    type: String
    images: [String]
  }

  type Query {
    product(ID: ID!): Product!
    getProduct(amount: Int): [Product]
  }

  type Mutation {
    createProduct(productInput: ProductInput): Product!
    deleteProduct(ID: ID!): Boolean
    editProduct(ID: ID!, productInput: ProductInput): Boolean
  }
`;
