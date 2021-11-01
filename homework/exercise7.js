var calcSumDigitsOfNumber = function (num) {
  var arr = num.toString().split('');
  var rs = arr.reduce(function (total, currentValue) {
    return total + +currentValue;
  }, 0);
  return rs;
};
