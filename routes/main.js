const express = require('express')
const router = express.Router()
const authController = require ('../controllers/auth')
const mainController = require('../controllers/main')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', mainController.getIndex) 
// refactoring login/signup to be a modal on homepage
// router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
// refactoring login/signup to be a modal on homepage
// router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router