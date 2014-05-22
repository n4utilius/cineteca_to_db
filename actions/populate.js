var schedule = require("node-schedule")
var async = require('async');
var cineteca = require('cineteca');
var mongoose = require('mongoose');

var api = require('../controllers/api.js');
var config = require('../config.js');

var populate = {}
var priv = {}



priv.fill = function(){
  cineteca.get_days( function(err, days) {
    async.each(days, function(day, callback){
        if (typeof(day) == "string" ){
          cineteca.get_movies_by_day( day, api.save_all, callback)
        }
      }, 
      function(e){
        console.log("Todas las peliculas disponibles han sido guardadas/actualizadas")
        mongoose.connection.close()
      }
    )
  });
}

priv.refill_cache = function(error){
  if (error){
    console.log("No se elimino Colección MovieCache")
  }else{
    console.log("Colección MovieCache fue eliminada correctamente")
    priv.fill();
  }
}

populate.fill = function(){
  mongoose.connect(config.bd_url);
  priv.fill();
}

populate.recache = function(){
  mongoose.connect(config.bd_url);
  api.drop_cache(priv.refill_cache);
}

populate.squedule_tasks = function(){
  var diario = schedule.scheduleJob({hour: 6}, function(){
    populate.fill();
  });

  var semanal = schedule.scheduleJob({hour: 7, dayOfWeek: 0}, function(){
    populate.recache();
  });      
}

module.exports = populate;