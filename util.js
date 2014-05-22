/* Utilities */

Array.prototype.contains_by_key = function(obj, key){
  for (i in this){
    if ( this[i][key] != undefined && obj[key] != undefined && this[i][key] == obj[key] ){
      return true;
    }
  }
  return false;
}

Array.prototype.indexof_by_key = function(obj, key){
  for (i in this){
    if ( this[i][key] != undefined && obj[key] != undefined && this[i][key] == obj[key] ){
      return i;
    }
  }
  return -1;
}

is_equal = function(base, obj){
  for (key in base){
    if ( obj[key] == undefined || base[key] != obj[key] ){
      return false
    }
  }
  return true;
}