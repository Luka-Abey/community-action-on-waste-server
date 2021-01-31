const express = require('express')
const mongoose = require('mongoose')
const submissions = require('./router/submissions.js')
const comments = require('./router/comments')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongo = process.env.mongoURI
const db = require('./keys.js').mongoURI

// sort deprecation warnings
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

// Connect DB


// // Avoid CORS error
app.use(
  cors({
    // origin: url,
    // credentials: true
    // exposedHeaders: ['set-cookie']
  })
)

// BodyParser
app.use(express.json())

mongoose
  .connect(mongo)
  .then(() => console.log('Mongo db connected...'))
  .catch(err => console.log(err))

// API routes
app.use('/api/comments', comments)
app.use('/api/submissions', submissions)

app.listen(process.env.PORT || 6000, () => console.log(`Server started...`))