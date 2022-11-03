const express = require('express')
const router = express.Router()
const game = require('./game')
const tag = require('./tag')
const user = require('./user')
const auth = require('./auth')
const authGoogle = require('./authGoogle')
const authFacebook = require('./authFacebook')
const payment = require('./payment')
const review = require('./review')
const wishlist = require('./wishlist')
const privacy = require('./privacy')
const user_read = require('./user_read')
const notification = require('./notification')
const middleware = require('../../middleware')

router.use('/game', game)
router.use('/tag', tag)
router.use('/user', user)
router.use('/auth', auth)
router.use('/authGoogle', authGoogle)
router.use('/authFacebook', authFacebook)
router.use('/review', middleware.restrict, review)
router.use('/privacy', middleware.restrict, privacy)
router.use('/wishlist', middleware.restrict, wishlist)
router.use('/payment', middleware.restrict, payment)
router.use('/user_read', middleware.restrict, user_read)
router.use('/notification', middleware.restrict, notification)

module.exports = router