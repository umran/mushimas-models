const mongoose = require('mongoose')
const { Schema } = mongoose

const states = [
  'INACTIVE',
  'ACTIVE',
  'DELETED'
]

const InnerCollection = Schema({
  name: {
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
  '@organizationId': {
    type: String,
    required: true
  },
  '@bucket': {
    type: InnerCollection,
    required: true
  }
})

module.exports = mongoose.model('Collection', Collection)