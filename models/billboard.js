// The Day model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema

var billboardSchema = mongoose.Schema({
    id:  String, 
    day: String,
    schedule: String
  })

module.exports = mongoose.model('Billboard', billboardSchema);