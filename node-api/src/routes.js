'use strict'

const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

router.get('/', userController.index)
router.get('/user/:id', userController.show)
router.post('/user', userController.create)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.destroy)

module.exports = router
