const AuthenticationResolver = require('./authentication')

module.exports = resolvers = {
    Mutation: {
        ...AuthenticationResolver.Mutation
    }
};