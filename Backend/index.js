const { ApolloServer, gql } = require('apollo-server');
const rootResolver =  require('./resolver/index');
const rootSchema = require('./schema/index')

const server = new ApolloServer({
    typeDefs: rootSchema,
    resolvers: rootResolver,
    context: request => ({
        ...request,
    }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});