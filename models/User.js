const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchame =- new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String
})


// Password hash middleware

UserSchema.pre('save', function save(next) {
  const user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if(err) { return next(err) }
      user.password = hash
      next()
    })
  })
})