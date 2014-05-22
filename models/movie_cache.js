// The Movie model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema

var movieCacheSchema = mongoose.Schema({
    id: {type: String, required: true, index: {unique: true, dropDups: true}},
    
    url: String,
    title: String,
    details: String,
    synopsis: String,
    img: String,
    youtube: String,
    embed: String
  })

module.exports = mongoose.model('MovieCache', movieCacheSchema);
