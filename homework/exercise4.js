var findMinNumberOfArray = function (arr) {
  var min = arr[0];
  arr.forEach(function (x) {
    if (x < min) {
      min = x;
    }
  });
  return min;
};
