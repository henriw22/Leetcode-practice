var minimumOperations = function(nums) {
  let numsNotZero = [];
  for (num of nums) {
      if (!numsNotZero.includes(num) && num !== 0) {
          numsNotZero.push(num);
      }
  }
  return numsNotZero.length;
};
