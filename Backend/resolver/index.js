
const novelResolver = require('./novel');
const accountResolver = require('./account')
const chapterResolver = require('./chapter')
const { DateTimeResolver, EmailAddressResolver } = require('graphql-scalars');

const rootResolver = {
   ...novelResolver,
   ...accountResolver,
   ...chapterResolver,
   DateTime: DateTimeResolver,
   EmailAddress: EmailAddressResolver,
}

module.exports = rootResolver;