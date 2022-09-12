var minPairSum = function(nums) {
  const sortedNums = nums.sort((a,b) => a - b);
  let max = 0;
  for (let i = 0; i < sortedNums.length/2; i++) {
      const index = sortedNums.length - 1;
      const sum = sortedNums[i] + sortedNums[index - i];
      if (sum > max) {
          max = sum;
      }
  }
  return max;
}