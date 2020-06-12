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
	},
	Novel: {
		async chapter(parent, {text}, context, info) {
			try {
				const novelID = parent._id.toString()
				const ChapterList = await Chapter.find({
					novel: novelID
				})
				if (!ChapterList) {
					throw new Error("Novel does not have any chapter yet")
				}
				return ChapterList
			}
			catch (err) {
				throw err;
			}
		},
	}
};