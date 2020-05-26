const Chapter = require('../../models/chapter')

module.exports = resolvers = {
	Query: {
		async ReadChapter(parent, {id}, context, info) {
			try {
                console.log('id', id)
                const chapter = await Chapter.findOne({ _id: id });
                console.log('chapter', chapter)
				if (!chapter) {
					throw new Error("Chapter does not exist");
				}
				return chapter
			} catch (err) {
				throw err;
			}
		},
	}
};