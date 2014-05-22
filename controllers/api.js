//var Day = require('../models/day.js');
var Billboard = require('../models/billboard.js');
var Movie = require('../models/movie.js');
var MovieCache = require('../models/movie_cache.js');
require('../util.js');

var priv = {};
api = {};

priv.save_bildboard = function(id, day, schedule){

  Billboard.find({ id : id, day: day }).remove()

  for (i in schedule){
    var my_billboard = new Billboard({
        id:  id, 
        day: day,
        schedule: schedule[i]
        //schedule: new Date(movie.day + " " + movie.schedule[i] + ":00")
    });

    my_billboard.save(function(e, mv){
      if(!e){ console.log("Se guardo la pelicula " + mv.id + " en Billboard"); }
    });
  
  }
}

api.save_all = function(err, movies) {
  for (j in movies){
    var movie = movies[j];

    var data = {
      id: movie.id,
      title: movie.title,
      details: movie.details,
      synopsis: movie.synopsis,
      img: movie.img,
      youtube: movie.youtube,
      embed: movie.embed
    }

    var my_movie = new Movie(data);
    var my_movie_cache = new MovieCache(data);

    my_movie.save(function(e, mv){
      if(!e){ console.log("Se guardo la pelicula " + mv.title + " en Movies"); }
    });

    my_movie_cache.save(function(e, mv){
      if(!e){ console.log("Se guardo la pelicula " + mv.title + " en MovieCache"); }
    });

    priv.save_bildboard(movie.id, movie.day, movie.schedule)
        
    
  }
}

api.drop_cache = function(callback) {
  MovieCache.remove({}, callback);
}

api.fill_cache = function(err, movies) {
  for (j in movies){
    var movie = movies[j];

    var data = {
      id: movie.id,
      title: movie.title,
      details: movie.details,
      synopsis: movie.synopsis,
      img: movie.img,
      youtube: movie.youtube,
      embed: movie.embed
    }

    var my_movie_cache = new MovieCache(data);

    my_movie_cache.save(function(e, mv){
      if(!e){ console.log("Se guardo la pelicula " + mv.title + " en MovieCache"); }
    });
    
  }
}
module.exports = api;