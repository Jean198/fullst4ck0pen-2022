const config = require('./utils/config')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blog')
const logger = require('./utils/logger')

logger.info('connecting to', config.DATABASE_URI)




mongoose.connect(config.DATABASE_URI)

app.use(cors())
app.use(express.json())
app.use('/api/blogs',blogsRouter)

module.exports=app