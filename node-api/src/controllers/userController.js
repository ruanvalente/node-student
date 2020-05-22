'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {
  async index(req, res) {
    const user = await User.find({})
    return res.json(user)
  },
  async create(req, res) {
    const user = await User.create(req.body)
    return res.json(user)
  },
  async show(req, res) {
    const user = await User.findById(req.params.id)
    return res.json(user)
  },
}
