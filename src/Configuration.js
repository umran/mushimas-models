const mongoose = require('mongoose')
const { Schema } = mongoose

const states = [
  'DISABLED',
  'ENABLED',
  'DELETED'
]

const InnerConfiguration = Schema({
  collectionMapping: {
    type: String,
    required: true
  },
  schemas: {
    type: String,
    required: true
  }
}, { _id: false })

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
  '@bucketId': {
    type: String,
    required: true
  },
  '@configuration': {
    type: InnerConfiguration,
    required: false
  }
})

const model = mongoose.model('Configuration', Configuration)

module.exports = model