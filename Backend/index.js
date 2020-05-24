const { ApolloServer, gql } = require('apollo-server');
const rootResolver =  require('./resolver/index');
const rootSchema = require('./schema/index')
const mongoose = require("mongoose");

var dotenv = require('dotenv');
dotenv.config();

var mongoDB = process.env.DB_CONNECT
console.log(mongoDB)

const server = new ApolloServer({
    typeDefs: rootSchema,
    resolvers: rootResolver,
    context: request => ({
        ...request,
    }),
});

mongoose.connect(`${mongoDB}`, {useNewUrlParser: true})
    .then(() => {
        server.listen(8000);
    }).catch(err => {
        console.log(err);
    })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});