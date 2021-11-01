var capitalizeFirstLetterOfString = function (str) {
  var rs = str.toLowerCase();
  rs = rs.replace(rs[0], rs[0].toUpperCase());
  return rs;
};
