const Novel = require('../../models/novel');
const Rating = require('../../models/rating');
const mongoose = require("mongoose");

module.exports = resolvers = {
    Query: {
        async RatingByCurrentUser(parent, {limit, page}, context, info) {
			try {
				const User = context.user || false
				if (!User) {
					throw new Error("You haven't login yet")
				}
				const userID = User.id || ''
				const ratingList = await Rating.find({
					user: userID
				}).sort({updatedTime: -1}).skip(limit*page).limit(limit);
				return ratingList
			} catch (err) {
				throw err;
			}
		},
    },
	Mutation: {
		async ratingNovel(parent, {novelID, score}, context, info) {
			try {
				const User = context.user || false
				if (!User) {
					throw new Error("You haven't login yet")
				}
				const UserId = User.id || ''
				const  CurrentNovel= await Novel.findOne({
					_id: novelID,
				})
				if (!CurrentNovel) {
					throw new Error("The novel doesn't exist")
				}
				const query = {
                    user: UserId,
                    novel: CurrentNovel._id
                }
                const update = {
                    score: score,
                    updatedTime: new Date()
                }
                const options = { upsert: true, new: true, setDefaultsOnInsert: true };

                const currentRating = await Rating.findOneAndUpdate(query, update, options)

				const ratingScore = await Rating.aggregate([
					{ $match : { novel : mongoose.Types.ObjectId(novelID) } },
					{
						"$group": {
							"_id": "$novel",
							"avgScore": { "$avg": "$score" },
						}
					}
				])
				if (ratingScore.length > 0) {
					await Novel.Update({ _id: novelID }, {avgScore: ratingScore[0].avgScore})
				}

                return currentRating
			}
			catch (err) {
				throw err;
			}
		},
	},
	Novel: {
		async rating(parent, {text}, context, info) {
			try {
				const novelID = parent._id.toString()
				const ratingList = await Rating.find({
					novel: novelID
				})
				return ratingList
			}
			catch (err) {
				throw err;
			}
		},
	}
};