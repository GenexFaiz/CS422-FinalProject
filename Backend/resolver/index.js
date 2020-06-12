
const accountResolver = require('./account')
const chapterResolver = require('./chapter')
const queryResolver = require('./query')
const mutationResolver = require('./mutation')
const novelResolver = require('./novel')
const { DateTimeResolver, EmailAddressResolver } = require('graphql-scalars');

const rootResolver = {
   ...queryResolver,
   ...mutationResolver,
   DateTime: DateTimeResolver,
   EmailAddress: EmailAddressResolver,
   ...accountResolver,
   Novel: chapterResolver.Novel,
   Chapter: novelResolver.Chapter
}

module.exports = rootResolver;