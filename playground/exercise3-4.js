var masked = function(str, a) {
  var rs = [];
  for (var i=0; i<10; i++) {
    var num_str = str.replace('*', i.toString());
    var num = parseInt(num_str);
    if (num % a === 0) {
      rs.push(num);
    }
  }
  return rs;  
}
