var maxProduct = function(nums) {
  let sortedNums = nums.sort((a,b) => a - b);
  let index = sortedNums.length;
  return (sortedNums[index-1] - 1) * (sortedNums[index-2] - 1);
};