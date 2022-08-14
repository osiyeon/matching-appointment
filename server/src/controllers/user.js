const serUser = require('../services/user')

exports.addUser = async (req, res) => {
    const userInfo  = req.body;
    console.log(userInfo);
    
    const userInfos = await serUser.addUser(userInfo);
    
    res.json({userInfos});
}

exports.kakaoCallback = async (req,res) => {
    console.log("-------req:", req )
}