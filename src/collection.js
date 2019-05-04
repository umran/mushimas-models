const mongoose = require('mongoose')
const { Schema } = mongoose

const states = [
  'DISABLED',
  'ENABLED',
  'DELETED'
]

const InnerCollection = Schema({
  name: {
    type: String,
    required: true
  },
  schema: {
    type: String,
    required: true
  }
})

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
  '@organizationId': {
    type: String,
    required: true
  },
  '@collection': {
    type: InnerCollection,
    required: true
  }
})

module.exports = mongoose.model('Collection', Collection)