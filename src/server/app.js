const express = require('express')
const ventasRoutes = require('./routes/reviews')

const cors = require('cors')
const app = express()

app.use(cors())
app.use('/v1',ventasRoutes)

module.exports = app
