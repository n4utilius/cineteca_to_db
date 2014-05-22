// The Movie model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema

var movieSchema = mongoose.Schema({
    id: {type: String, required: true, index: {unique: true, dropDups: true}},
    
    url: String,
    title: String,
    details: String,
    synopsis: String,
    img: String,
    youtube: String,
    embed: String/*,

    stats:{
        sumary:{
            clicks: Number,
            buys: Number
        },
        days:{
            clicks: Number,
            buys: Number
        }

    }
    */
  })

module.exports = mongoose.model('Movie', movieSchema);
