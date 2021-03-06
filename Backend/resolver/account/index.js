const Account = require('../../models/account')
const {accountMapper} = require('../../Utilities/utilities')

module.exports = resolvers = {
	Query: {
		async UserInfo(parent, {}, context, info) {
			try {
				const User = context.user || false
				if (!User) {
					throw new Error("You haven't login yet")
				}
				const UserInfo = await Account.findOne({
					_id: User.id
				})
				if (!UserInfo) {
					throw new Error("User does not exist")
				}
				const res = accountMapper(UserInfo)
				debugger
				return res
			}
			catch (err) {
				throw err;
			}
		},
	},
	Novel: {
		async uploader(parent, {text}, context, info) {
			try {
				const AccountID = parent.uploader.toString()
				const UploaderAccount = await Account.findOne({
					_id: AccountID
				}).select('-password')
				if (!UploaderAccount) {
					throw new Error("Account does not exist")
				}
				return accountMapper(UploaderAccount)
			}
			catch (err) {
				throw err;
			}
		},
	},
	Author: {
		async account(parent, {text}, context, info) {
			try {
				const AccountID = parent.account.toString()
				const AuthorAccount = await Account.findOne({
					_id: AccountID
				}).select('-password')
				if (!AuthorAccount) {
					throw new Error("Account does not exist")
				}
				return accountMapper(AuthorAccount)
			}
			catch (err) {
				throw err;
			}
		},
	},
	Rating: {
		async user(parent, {text}, context, info) {
			try {
				const AccountID = parent.user.toString()
				const AuthorAccount = await Account.findOne({
					_id: AccountID
				}).select('-password')
				if (!AuthorAccount) {
					throw new Error("Account does not exist")
				}
				return accountMapper(AuthorAccount)
			}
			catch (err) {
				throw err;
			}
		},
	},
};