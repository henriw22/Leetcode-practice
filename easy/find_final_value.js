var findFinalValue = function(nums, original) {
  nums.sort((a, b) => a - b);
  let result = original;
  for (let num of nums) {
      if (num === result) {
          result = result * 2;
      }
  }
  return result;
};