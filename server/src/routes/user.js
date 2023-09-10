const express = require("express")
const router = express.Router()
const passport = require("passport")
const controller = require("../controllers/user")

router.get("/login", controller.login)

module.exports = router
