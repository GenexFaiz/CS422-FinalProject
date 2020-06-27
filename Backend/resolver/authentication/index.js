const Account = require('../../models/account')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = resolvers = {
	Mutation: {
		async login(parent, {email, password}, context, info) {
			try {
				const CurrentAccount = await Account.findOne({
					email: email
                })
                if (!CurrentAccount) {
                    throw new Error("Account Dont Exist")
                }
                const valid = bcrypt.compareSync(password, CurrentAccount.password);
				if (!valid) {
					throw new Error("Password is wrong")
                }
                const jwtObject = {
                    email: CurrentAccount.email,
					type: CurrentAccount.type,
					id: CurrentAccount._id
                }
				return jwt.sign(
					jwtObject,
					"thisIsMySecretKey69",
					{ expiresIn: "1d" }
				);
			}
			catch (err) {
				throw err;
			}
		},
		async signup(parent, {email, password}, context, info) {
			try {
				const CurrentAccount = await Account.findOne({
					email: email,
				}).select('-password')
				if (CurrentAccount) {
					throw new Error("Account Already Exist")
                }
                const hashedPassword = bcrypt.hashSync(password, saltRounds);
				const createdAccount = await Account.create({
					username: email,
					email: email,
                    password: hashedPassword,
                    type: 'User',
                    createTime: new Date()
                })
                const jwtObject = {
                    email: createdAccount.email,
					type: createdAccount.type,
					id: createdAccount._id
                }
				return jwt.sign(
					jwtObject,
					"thisIsMySecretKey69",
					{ expiresIn: "1d" }
                )
			}
			catch (err) {
				throw err;
			}
		},
	}
};