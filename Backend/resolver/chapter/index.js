const Chapter = require('../../models/chapter')
const Novel = require('../../models/novel');

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
	Mutation: {
		async createChapter(parent, {novelID, content, number, title}, context, info) {
			try {
				const User = context.user || {}
				if (!User) {
					throw new Error("You haven't login yet")
				}
				const UserId = User.id || ''
				const CurrentNovel = await Novel.findOne({
					_id: novelID,
					uploader: UserId
				})
				if (!CurrentNovel) {
					throw new Error("You dont have permission to create chapter for this Novel")
				}
				const currentTime = new Date()
				const createdNovel = await Chapter.create({
					title: title,
					number: number,
					content: content,
					uploadTime: currentTime,
					novel: CurrentNovel._id
                })
                return createdNovel
			}
			catch (err) {
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