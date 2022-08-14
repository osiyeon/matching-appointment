const modUser = require('../models/user');

exports.addUser = async(userInfo) => {
    if(typeof userInfo === 'undefined' || Object.keys(userInfo).length === 0) {
        throw new TypeError(`sample(${userInfo}) is empty`)
    }
    
    const ret = await modUser.addUser(userInfo);
    
    return ret;
}