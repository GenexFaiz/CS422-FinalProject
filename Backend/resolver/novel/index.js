const Novel = require('../../models/novel')
const Author = require('../../models/author')
const path = require('path');
const directory = path.join(__dirname, "../../image/");
const sharp = require('sharp')
const gc = require('../../GoogleConfig')
const bucket = gc.bucket('cs422final')
const { checkForImage, novelMapper }= require("../../Utilities/utilities")

const uploadImage = (file, createdNovel) => new Promise((resolve, reject) => {
	const {filename, stream} = file
	const imageName = createdNovel._id.toString() + filename
	const blob = bucket.file(imageName)
	const blobStream = blob.createWriteStream({
		resumable: false
	})

	sharp(stream.path)
	.resize(1000)
	.pipe(blobStream).on('finish', () => {
		resolve()
	}).on('error', () => {
		reject(`Unable to upload image, something went wrong`)
	})
})

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
				return NovelList.map(item => novelMapper(item))
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
				return novelMapper(novel)
			} catch (err) {
				throw err;
			}
		},
		async Latest(parent, {limit, page}, context, info) {
			try {
				const novelList = await Novel.find().sort({updatedTime: -1}).skip(limit*page).limit(limit);
				return novelList.map(item => novelMapper(item))
			} catch (err) {
				throw err;
			}
		},
		async NovelByCurrentUser(parent, {limit, page}, context, info) {
			try {
				const User = context.user || false
				if (!User) {
					throw new Error("You haven't login yet")
				}
				const uploader = User.id || ''
				const novelList = await Novel.find({
					uploader: uploader
				}).sort({updatedTime: -1}).skip(limit*page).limit(limit);
				return novelList.map(item => novelMapper(item))
			} catch (err) {
				throw err;
			}
		},
		async MostViewed(parent, {limit, page}, context, info) {
			try {
				const novelList = await Novel.find().sort({view: -1}).skip(limit*page).limit(limit);
				return novelList.map(item => novelMapper(item))
			} catch (err) {
				throw err;
			}
		},
		async Recommend(parent, {limit, page}, context, info) {
			try {
				const novelList = await Novel.find().sort({avgScore: -1}).skip(limit*page).limit(limit);
				return novelList.map(item => novelMapper(item))
			} catch (err) {
				throw err;
			}
		},
	},
	Mutation: {
		async createNovel(parent, {title, type, author, summary, thumbnail}, context, info) {
			try {
				const User = context.user || false
				if (!User) {
					throw new Error("You haven't login yet")
				}
				const uploader = User.id || ''
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

				var createdNovel = await Novel.create({
					title: title,
                    uploader: uploader.toString(),
                    type: type,
					author: createdAuthor.toString(),
					summary: summary,
					view: 0,
					avgScore: 0,
					thumbnail: "https://storage.googleapis.com/"+ bucket.name +"/default.jpg",
					createdTime: currentTime,
					updatedTime: currentTime
				})

				await thumbnail.then(async file => {
					const {filename, mimetype, stream, encoding, createReadStream} = file
					if (checkForImage(mimetype)) {
						const imageName = createdNovel._id.toString() + filename
						const blob = bucket.file(imageName)
						await uploadImage(file, createdNovel)
						createdNovel = await Novel.findOneAndUpdate({_id: createdNovel._id}, {thumbnail:  `https://storage.googleapis.com/${bucket.name}/${blob.name}`}, {new: true})
					}
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
				const CurrentNovel = await Novel.findOne({
					_id: novelID
				})
				if (!CurrentNovel) {
					throw new Error("Chapter is parentless")
				}
				return novelMapper(CurrentNovel)
			}
			catch (err) {
				throw err;
			}
		},
	},
	Rating: {
		async novel(parent, {text}, context, info) {
			try {
				const novelID = parent.novel.toString()
				const CurrentNovel = await Novel.findOne({
					_id: novelID
				})
				if (!CurrentNovel) {
					throw new Error("Chapter is parentless")
				}
				return novelMapper(CurrentNovel)
			}
			catch (err) {
				throw err;
			}
		},
	}
};