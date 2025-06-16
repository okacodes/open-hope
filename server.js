const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const passport = require('passport')
const logger = require('morgan')
const session = require('express-session')
const flash = require('express-flash')
const MongoStore = require('connect-mongo')
const mainRoutes = require('./routes/main')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(
  session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      client: mongoose.connection.getClient()
    })
  })
)

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
 
app.listen((process.env.PORT || 8484), ()=>{
  console.log('Server is running, you better catch it!')
})
