var findDuplicateNumbersOf2Array = function (arr1, arr2) {
  var rs = [];
  var data1Obj = {};
  arr1.forEach((x) => {
    data1Obj[x] = true;
  });
  arr2.forEach((x) => {
    if (data1Obj[x]) {
      rs.push(x);
    }
  });
  return rs;
};
