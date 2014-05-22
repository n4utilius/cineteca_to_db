// The Day model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema

var daySchema = mongoose.Schema({
    day: { type: String, required: true, index: {unique: true, dropDups: true}},
    _day: String,
    movies: [{ id:  String, schedule: [String] }], 
  })

module.exports = mongoose.model('Day', daySchema);