const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  }
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
