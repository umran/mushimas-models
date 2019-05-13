const mongoose = require('mongoose')
const { Schema } = mongoose

const states = [
  'DISABLED',
  'ENABLED',
  'DELETED'
]

const Configuration = Schema({
  '@state': {
    type: String,
    required: true,
    enum: states
  },
  '@lastModified': {
    type: Date,
    required: true
  },
  '@lastCommitted': {
    type: Date,
    required: true
  },
  '@version': {
    type: Number,
    required: true
  },
  '@bucketId': {
    type: String,
    required: true
  },
  '@configuration': {
    type: String,
    required: false
  }
})

const model = mongoose.model('Configuration', Configuration)

module.exports = model