const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const MONGODB =
  "mongodb+srv://pjhaprakash0812:Prakash%401234@cluster0.s8i3swe.mongodb.net/?retryWrites=true&w=majority";

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
