const express = require("express")
const router = express.Router()
const controller = require("../controllers/auth")

router.post("/kakao", controller.kakaoSignIn)

module.exports = router
