require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const formTypeDefs = require("./graphql/Form/typeDefs");
const formResolvers = require("./graphql/Form/resolvers");

const MONGODB = `mongodb+srv://poojapithva2002:pooja1234@cluster0.lc5zdxk.mongodb.net/?retryWrites=true&w=majority
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formTypeDefs,
  formResolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("Graphql Connectd");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`server is runnning ${res.url}`);
  })
  .catch((err) => console.error(err));
