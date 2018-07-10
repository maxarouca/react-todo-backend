const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const databaseURL = require('./databaseURL')

module.exports = mongoose.connect(databaseURL)