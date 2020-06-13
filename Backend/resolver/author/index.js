const Author = require('../../models/author')

module.exports = resolvers = {
	Novel: {
		async author(parent, {text}, context, info) {
			try {
				const AuthorID = parent.author.toString()

				const NovelAuthor = await Author.findOne({
					_id: AuthorID
				})

				if (!NovelAuthor) {
					throw new Error("Author does not exist")
				}
				return NovelAuthor
			}
			catch (err) {
				throw err;
			}
		},
	}
};