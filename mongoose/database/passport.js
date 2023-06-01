const jwtStratagy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const user = require('./models/users')
const key = require('./db').key

const opts = {}
//change
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key

module.exports = passport => {
    passport.use(
        new jwtStratagy(opts, (jwtData, done) => {
            user.findById(jwtData.id).then(user =>{
                if (user) {
                    return done(null, user)
                }
                return done(null, false) 
            }).catch(err => {
                console.log(err)
            })
        })
    )
}