const Account = require('../../models/account')

module.exports = resolvers = {
	Novel: {
		async uploader(parent, {text}, context, info) {
			try {
                const AccountID = parent.uploader
                console.log('parent', parent)
				const UploaderAccount = await Account.findOne({
                    id: AccountID }).select('-password')
                console.log(UploaderAccount)
				if (!UploaderAccount) {
					throw new Error("Account does not exist")
				}
				return UploaderAccount
			}
			catch (err) {
				throw err;
			}
		},
	}
};