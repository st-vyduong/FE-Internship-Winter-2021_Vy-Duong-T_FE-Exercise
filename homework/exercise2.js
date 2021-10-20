var slice = function(str) {
  if (str.length > 15) {
    str = str.slice(10) + '...';
  }
  return str;
}
