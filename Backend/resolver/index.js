
const accountResolver = require('./account')
const chapterResolver = require('./chapter')
const novelResolver = require('./novel')
const authenticationResolver = require('./authentication')
const authorResolver = require('./author')
const { DateTimeResolver, EmailAddressResolver } = require('graphql-scalars');

const rootResolver = {
   DateTime: DateTimeResolver,
   EmailAddress: EmailAddressResolver,
   Query: {
      ...novelResolver.Query,
      ...chapterResolver.Query,
  },
   Mutation: {
      ...authenticationResolver.Mutation,
      ...novelResolver.Mutation,
      ...chapterResolver.Mutation
  },
   Novel: {
      ...chapterResolver.Novel,
      ...accountResolver.Novel,
      ...authorResolver.Novel
   },
   Author: {
      ...accountResolver.Author
   },
   Chapter: {
      ...novelResolver.Chapter
   }
}

module.exports = rootResolver;