var shuffle = function(nums, n) {
  let result = [];
  for (let x = 0; x < n; x++) {
      result.push(nums[x]);
      result.push(nums[n + x]);
  }
  return result;
};