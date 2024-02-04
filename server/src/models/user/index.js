const db = require("./user");

exports.addUser = async userInfo => {
	const ret = await db.create(userInfo);

	return ret || {};
};

exports.findUserByUserId = async userId => {
	const ret = await db
		.findOne(
			{
				userId,
			},
			{ _id: 0, __v: 0 }
		)
		.exec();

	return ret || {};
};
