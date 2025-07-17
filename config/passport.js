const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function (passport) {
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }).then((user) => {
      console.log(user)
      if (!user) {
        console.log('User not found')
        return done(null, false, { msg: `Email ${email} not found.` })
      }
      if(!user.password) {
        return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' })
      }

      // here, not a function when err and user switched line 7
      user.comparePassword(password, (err, isMatch) => {
        console.log('Checking if password is a match.')
        if (err) { return done(err) }
        if (isMatch) {
          console.log('User found')
          return done(null, user)
        }
        return done(null, false, { msg: 'Invalid email or password.' })
      })
    }).catch((err) => {
      if (err) { 
        console.log('Error')
        return done(err) 
      }
    })
  }))


  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    try {
      user = User.findById(id)
      done(null, user)
    } catch (err) {
      done(err, null)
    }

    // User.findById(id, (err, user) => done(err, user))
  })
}