var produceDivisibleInteger = function (str, a) {
  var rs = [];
  for (var i = 0; i < 10; i++) {
    var numStr = str.replace('*', i.toString());
    var num = + numStr;
    if (num % a === 0) {
      rs.push(num);
    }
  }
  return rs;
};
