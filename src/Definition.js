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
    required: true
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
})

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
    required: true
  },
  es_indexed: {
    type: Boolean,
    required: true
  },
  es_keyword: {
    type: Boolean,
    required: true
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
})

const Field = Schema({
  name: {
    type: String,
    required: true
  },
  options: {
    type: Options,
    required: true
  }
})

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