var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];

var odd_sum = mang.reduce((total,currentValue) => {
  if (currentValue % 2 !== 0)
    {
      return total + currentValue;
    } else 
    {
      return total;
    }
});
