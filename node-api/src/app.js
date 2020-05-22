'use strict'

const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())

app.use('/api/users', routes)

module.exports = app
