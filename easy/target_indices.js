var targetIndices = function(nums, target) {
  const sortedNums = nums.sort((a,b) => a - b);
  let result = [];
  for (let i = 0; i < sortedNums.length; i++) {
      if (sortedNums[i] === target) {
          result.push(i);
      }
  }
  return result;
};