const { gql } = require("apollo-server");

module.exports = gql`
  type Mutation {
    submitForm(
      firstName: String
      lastName: String
      email: String
      phoneNumber: String
      address: String
      city: String
      state: String
      zipCode: String
    ): FormResult
  }

  type FormResult {
    success: Boolean
    message: String
  }
`;
