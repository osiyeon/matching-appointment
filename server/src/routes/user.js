const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router.get("/login", controller.login);

module.exports = router;
