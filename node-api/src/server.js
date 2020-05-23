;('use strict')
require('dotenv').config({ path: '.env' })
require('./model/User')
const server = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.Promise = global.Promise

server.listen(PORT, (err) => {
  if (!err) {
    mongoose.connect(`${process.env.DATABASE}/${process.env.DATABASE_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    require('./model/User')
    console.log(`Server is runing on http://localhost:${PORT}/api`)
  } else {
    console.log('Error:', err)
  }
})
