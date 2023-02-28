const express = require('express')
const router = express.Router()
const { allUsers } = require('../controllers/usersController')

router.get('/allUsers', allUsers)

module.exports = router