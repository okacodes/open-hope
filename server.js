const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const passport = require('passport')
const session = require('express-session')
const homeRoutes = require('./routes/home')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
 
app.listen((process.env.PORT || 8484), ()=>{
  console.log('Server is running, you better catch it!')
})