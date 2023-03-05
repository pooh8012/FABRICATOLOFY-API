const { gql } = require("apollo-server");

module.exports = gql`
  type Product {
    name: String
    description: String
    price: Int
    image: String
    type: String
  }
  input ProductInput {
    name: String
    description: String
    price: Int
    image: String
    type: String
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
