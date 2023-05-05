const express = require('express')
const postReviews = require('../controllers/reviewcontroller')
const api = express.Router()

api.post('/Reviews/VentaReview', postReviews)

module.exports = api