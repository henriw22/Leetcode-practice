var smallerNumbersThanCurrent = function(nums) {
  const result = [];
  nums.forEach (num => {
      let count = 0;
      for (let i = 0; i < nums.length; i++) {
          if(num > nums[i]) {
              count++;
          }
      }
      result.push(count);
  })
  return result;
};