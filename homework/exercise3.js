var rs = '';
var upper_lower = function(str) {
  rs += str.charAt(0).toUpperCase();
  rs += str.slice(1).toLowerCase();
  return rs;
}
