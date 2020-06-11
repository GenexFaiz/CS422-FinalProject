const Account = require('../../models/account')
const jwt = require("jsonwebtoken");

module.exports = resolvers = {
	Novel: {
		async uploader(parent, {text}, context, info) {
			try {
				const AccountID = parent.uploader.toString()
				debugger
				const UploaderAccount = await Account.findOne({
					_id: AccountID
				}).select('-password')
				debugger
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
};