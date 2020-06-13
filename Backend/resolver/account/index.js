const Account = require('../../models/account')

module.exports = resolvers = {
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
				return UploaderAccount
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
				return AuthorAccount
			}
			catch (err) {
				throw err;
			}
		},
	}
};