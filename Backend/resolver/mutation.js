const AuthenticationResolver = require('./authentication')
const NovelResolver = require('./novel')

module.exports = resolvers = {
    Mutation: {
        ...AuthenticationResolver.Mutation,
        ...NovelResolver.Mutation
    }
};