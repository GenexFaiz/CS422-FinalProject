const Novel = require('../../models/novel')
const Author = require('../../models/author')

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
		async Latest(parent, {limit, page}, context, info) {
			try {
				const novelList = await Novel.find().sort({updatedTime: -1}).skip(limit*page).limit(limit);
				return novelList
			} catch (err) {
				throw err;
			}
		},
	},
	Mutation: {
		async createNovel(parent, {title, uploader, type, author}, context, info) {
			try {
				const CurrentNovel = await Novel.findOne({
					title: title,
				})
				if (CurrentNovel) {
					throw new Error("Novel Already Exist")
				}
				var createdAuthor = ''
				if (type == 'self-created') {
					const checkAuthor = await Author.findOne({
						account: uploader,
						type: 'self-created'
					})
					if (!checkAuthor) {
						const thisAuthor = await Author.create({
							name: '',
							type: 'self-created',
							account: uploader.toString()
						})
						createdAuthor = thisAuthor._id
					} else {
						createdAuthor = checkAuthor._id
					}
				} else if (type == 'outside-created') {
					const checkAuthor = await Author.findOne({
						name: author,
						type: 'outside-created'
					})
					if (!checkAuthor) {
						const thisAuthor = await Author.create({
							name: author,
							type: 'outside-created',
							account: uploader.toString()
						})
						createdAuthor = thisAuthor._id
					} else {
						createdAuthor = checkAuthor._id
					}
				}
				const currentTime = new Date()
				const createdNovel = await Novel.create({
					title: title,
                    uploader: uploader.toString(),
                    type: type,
					author: createdAuthor.toString(),
					createdTime: currentTime,
					updatedTime: currentTime
                })
                return createdNovel
			}
			catch (err) {
				throw err;
			}
		},
	},
	Chapter: {
		async novel(parent, {text}, context, info) {
			try {
				const novelID = parent.novel.toString()
				debugger
				const CurrentNovel = await Novel.findOne({
					_id: novelID
				})
				debugger
				if (!CurrentNovel) {
					throw new Error("Chapter is parentless")
				}
				return CurrentNovel
			}
			catch (err) {
				throw err;
			}
		},
	}
};