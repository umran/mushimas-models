const mongoose = require('mongoose')
const { Schema } = mongoose

const states = [
  'ARCHIVED',
  'PUBLISHED',
  'DELETED'
]

const Document = Schema({
  '@state': {
    type: String,
    required: true,
    enum: states
  },
  '@lastModified': {
    type: Date,
    required: true
  },
  '@idempotencyKey': {
    type: String,
    required: true
  },
  '@initialHash': {
    type: String,
    required: true
  },
  '@collectionId': {
    type: String,
    required: true
  },
  '@bucketId': {
    type: String,
    required: true
  },
  '@draftPublished': {
    type: Boolean,
    required: true
  },
  '@draft': {
    type: Schema.Types.Mixed,
    required: true
  },
  '@document': {
    type: Schema.Types.Mixed,
    required: false
  }
})

const model = mongoose.model('Document', Document)

module.exports = model