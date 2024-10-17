const blogsRouters = require('./controllers/blogs')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const {PORT, MONGODB_URI} = require('./utils/config')
const  {info, error} = require('./utils/logger')
const { requestLogger, errorHandler, unknownEndpoint } = require('../../part3/server-notes/utils/middleware')

mongoose.set('strictQuery', false)

mongoose.connect(MONGODB_URI)
  .then(() => 
    info('connected to dababase'))
  .catch((error) => 
    error('failed connection',error))

app.use(cors())
app.use(express.json())
app.use(requestLogger)

app.use('/api/blogs', blogsRouters)

app.use(unknownEndpoint)
app.use(errorHandler)
module.exports = app