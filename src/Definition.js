const mongoose = require('mongoose')
const { Schema } = mongoose

const states = [
  'DISABLED',
  'ENABLED',
  'DELETED'
]

const InnerDefinition = Schema({
  name: {
    type: String,
    required: true
  },
  definition: {
    type: String,
    required: true
  }
})

const Definition = Schema({
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
  '@definition': {
    type: InnerDefinition,
    required: true
  }
})

const model = mongoose.model('Definition', Definition)

module.exports = model