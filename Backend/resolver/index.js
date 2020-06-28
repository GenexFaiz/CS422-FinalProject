
const accountResolver = require('./account')
const chapterResolver = require('./chapter')
const novelResolver = require('./novel')
const authenticationResolver = require('./authentication')
const authorResolver = require('./author')
const ratingResolver = require("./rating")
const { DateTimeResolver, EmailAddressResolver } = require('graphql-scalars');

const rootResolver = {
   DateTime: DateTimeResolver,
   EmailAddress: EmailAddressResolver,
   Query: {
      ...novelResolver.Query,
      ...chapterResolver.Query,
      ...accountResolver.Query,
      ...ratingResolver.Query
  },
   Mutation: {
      ...authenticationResolver.Mutation,
      ...novelResolver.Mutation,
      ...chapterResolver.Mutation,
      ...ratingResolver.Mutation
  },
   Novel: {
      ...chapterResolver.Novel,
      ...accountResolver.Novel,
      ...authorResolver.Novel,
      ...ratingResolver.Novel
   },
   Author: {
      ...accountResolver.Author
   },
   Chapter: {
      ...novelResolver.Chapter
   },
   Rating: {
      ...accountResolver.Rating,
      ...novelResolver.Rating
   }
}

module.exports = rootResolver;