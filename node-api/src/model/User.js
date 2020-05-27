'use strict'

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
mongoose.Promise = global.Promise

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

UserSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('User', UserSchema)
