var sortEvenOdd = function(nums) {
  let odd = [];
  let even = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      if ((i % 2) === 0) {
          even.push(nums[i]);
      } else {
          odd.push(nums[i]);
      }
  }
  odd.sort((a,b) => b - a);
  even.sort((a,b) => a - b);
  for (let i = 0; i < odd.length; i++) {
      result.push(even[i]);
      result.push(odd[i]);
  }
  if (even.length > odd.length) {
      result.push(even[even.length - 1]);
  }
  return result;
};