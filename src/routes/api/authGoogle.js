const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const express = require('express');
const User = require('../../models/User');
const setting = require('../../setting/env');
const Privacy = require('../../models/Privacy');
const UserRead = require('../../models/UserRead');
const cloudinary = require('cloudinary').v2
const router = express.Router()

passport.use(new GoogleStrategy({
    clientID: "359240751198-epbap0vqd5lkqpb8ikia0l21io22b43d.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: `${setting.CLIENT_URL}/auth/google`
},
    async function (accessToken, refreshToken, user, cb) {
        const me = await User.findWithProviderId(user.id)
        if (me) {
            cb(null, me)
        } else {        
            cloudinary.uploader.upload(user.photos[0].value, {
                public_id: 'google_avatar' + Date.now(),
                folder: 'Estibew'
            }).then(async function (result) {
                const newUser = await User.query().insertAndFetch({
                    email: user.emails[0].value,
                    provider: user.provider,
                    providerId: user.id,
                    username: user.displayName,
                    avatar: result.url
                })
                await Privacy.query().insert({
                    userId: newUser.id
                })
                await UserRead.query().insert({
                    userId: newUser.id
                })
                cb(null, newUser)
            }).catch((error) => {
                console.log(error);
            })
        }
    }
))

router.get('/', passport.authenticate('google', {
    session: false, scope: ['email', 'profile']
}));

router.get('/callback', passport.authenticate('google', {
    session: false,
    failureRedirect: `${setting.CLIENT_URL}/404`,
}),
    function (req, res) {
        res.status(200).json({
            success: true,
            token: req.user.toJsonWithToken()
        })
    }
)

module.exports = router