var num_sum = function(number) {
  var arr = number.toString().split('');
  var rs = arr.reduce(function(total, currentValue) {
    return total + parseInt(currentValue);
  }, 0);
  return rs;
}