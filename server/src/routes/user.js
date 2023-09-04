const express = require("express")
const router = express.Router()
const passport = require("passport")
const controller = require("../controllers/user")

router.get("/kakao", passport.authenticate("kakao"))
router.get("/kakao/callback", controller.kakaoCallback)

router.get("/test", controller.test)
router.get("/login", controller.login)

module.exports = router
