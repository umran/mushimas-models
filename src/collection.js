const mongoose = require('mongoose')
const { Schema } = mongoose

const states = [
  'DISABLED',
  'ENABLED',
  'DELETED'
]

const Collection = Schema({
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
  '@bucket': {
    type: String,
    required: true
  },
  '@organizationId': {
    type: String,
    required: true
  },
  '@organization': {
    type: String,
    required: true
  },
  '@collection': {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Collection', Collection)