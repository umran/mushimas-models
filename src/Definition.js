const mongoose = require('mongoose')
const { Schema } = mongoose

const states = [
  'DISABLED',
  'ENABLED',
  'DELETED'
]

const ItemOptions = Schema({
  type: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    required: true
  },
  enabled: {
    type: Boolean,
    required: true
  },
  es_indexed: {
    type: Boolean,
    required: true
  },
  es_keyword: {
    type: Boolean,
    required: false
  },
  es_boost: {
    type: Number,
    required: false
  },
  es_analyzer: {
    type: String,
    required: false
  },
  es_search_analyzer: {
    type: String,
    required: false
  },
  es_search_quote_analyzer: {
    type: String,
    required: false
  },
  ref: {
    type: String,
    required: false
  }
}, { _id: false })

const Options = Schema({
  type: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    required: true
  },
  enabled: {
    type: Boolean,
    required: false
  },
  es_indexed: {
    type: Boolean,
    required: false
  },
  es_keyword: {
    type: Boolean,
    required: false
  },
  es_boost: {
    type: Number,
    required: false
  },
  es_analyzer: {
    type: String,
    required: false
  },
  es_search_analyzer: {
    type: String,
    required: false
  },
  es_search_quote_analyzer: {
    type: String,
    required: false
  },
  ref: {
    type: String,
    required: false
  },
  item: {
    type: ItemOptions,
    required: false
  }
}, { _id: false })

const Field = Schema({
  name: {
    type: String,
    required: true
  },
  options: {
    type: Options,
    required: true
  }
}, { _id: false })

const InnerDefinition = Schema({
  name: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  fields: {
    type: [Field],
    required: true
  }
}, { _id: false })

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