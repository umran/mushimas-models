const mongoose = require('mongoose')
const { Schema } = mongoose

const states = [
  'DISABLED',
  'ENABLED',
  'DELETED'
]

const InnerBucket = Schema({
  name: {
    type: String,
    required: true
  }
}, { _id: false })

const Bucket = Schema({
  '@state': {
    type: String,
    required: true,
    enum: states
  },
  '@lastModified': {
    type: Date,
    required: true
  },
  '@organizationId': {
    type: String,
    required: true
  },
  '@bucket': {
    type: InnerBucket,
    required: true
  }
})

const model = mongoose.model('Bucket', Bucket)

module.exports = model