const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controllers/user')

// router.post('/', controller.addUser);

router.get('/kakao', passport.authenticate('kakao'))
router.get('/kakao/callback', controller.kakaoCallback)

module.exports = router;