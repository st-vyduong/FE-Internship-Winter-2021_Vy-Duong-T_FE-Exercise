var rs = [];
var same = function(arr1, arr2) {
  arr1.forEach(function(x) {
    arr2.forEach(function(y) {
      if ( (x === y) && (!rs.includes(y))) {
        rs.push(y);
      }
    })
  })
  return rs;
}