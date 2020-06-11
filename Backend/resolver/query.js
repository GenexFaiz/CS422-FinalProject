const NovelResolver = require('./novel/index')
const ChapterResolver = require('./chapter')

module.exports = resolvers = {
    Query: {
        ...NovelResolver.Query,
        ...ChapterResolver.Query,
    }
};