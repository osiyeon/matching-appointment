const db = require('./user');

exports.addUser = async ({email, nickname, userId, providerType}) => {
    console.log({email, nickname, userId, providerType})
    const ret = await db.create({
        userId,
        nickname,
    });
    
    return ret || {}
};

exports.findUserByUserId = async (userId) => {
    const ret = await db.findOne({
        userId: userId
    }).exec();
    
    return ret || {}
}