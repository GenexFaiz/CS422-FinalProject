const { ApolloServer, gql } = require('apollo-server');
const rootResolver =  require('./resolver/index');
const rootSchema = require('./schema/index')
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const gc = require('./GoogleConfig')
const bucket = gc.bucket('cs422final')

var dotenv = require('dotenv');
dotenv.config();

var mongoDB = process.env.DB_CONNECT
console.log(mongoDB)

const server = new ApolloServer({
    typeDefs: rootSchema,
    resolvers: rootResolver,
    context: async ({req}) => {
        try {
            const token = req.headers.authorization || '';
            var user = await jwt.verify(token, "thisIsMySecretKey69");
            return { ...req, user };
        } catch(err) {
            return req
        }
    },
});

mongoose.connect(`${mongoDB}`, {useNewUrlParser: true})
    .then(() => {
        server.listen(8000);
    }).catch(err => {
        console.log(err);
    })
mongoose.set('useFindAndModify', false);
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});