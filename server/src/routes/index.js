const express = require("express");

const router = express.Router();

router.use("/api/sample", require("./sample"));
router.use("/api/user", require("./user"));

router.use("/api/auth", require("./auth"));

module.exports = router;
