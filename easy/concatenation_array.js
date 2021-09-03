var getConcatenation = function(nums) {
  let result = [];
  let n = 0;
  while (n < 2) {
      for (let i = 0; i < nums.length; i++) {
          result.push(nums[i]);
      }
      n++;
  } 
  return result;
}