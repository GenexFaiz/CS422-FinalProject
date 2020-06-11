
const accountResolver = require('./account')
const queryResolver = require('./query')
const mutationResolver = require('./mutation')
const { DateTimeResolver, EmailAddressResolver } = require('graphql-scalars');

const rootResolver = {
   ...queryResolver,
   ...mutationResolver,
   DateTime: DateTimeResolver,
   EmailAddress: EmailAddressResolver,
   ...accountResolver
}

module.exports = rootResolver;