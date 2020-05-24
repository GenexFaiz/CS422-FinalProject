const Novel = require('../../models/novel')

module.exports = resolvers = {
	Query: {
		async SearchNovel(parent, {text}, context, info) {
			try {
				const NovelList = await Novel.find({
					title: { $regex: new RegExp(text, 'i') }
				})
				if (!NovelList) {
					throw new Error("Novels does not exist")
				}
				return NovelList
			}
			catch (err) {
				throw err;
			}
		},
		async Summary(parent, {id}, context, info) {
			try {
				const novel = await Novel.findOne({ _id: id });
				if (!novel) {
					throw new Error("Novel does not exist");
				}
				return novel
			} catch (err) {
				throw err;
			}
		},
	}
};