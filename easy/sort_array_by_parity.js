var sortArrayByParity = function(nums) {
  const odd = [];
  const even = [];
  for (let num of nums) {
      if (num % 2 === 0) {
          even.push(num);
      } else {
          odd.push(num);
      }
  }
  return [...even, ...odd];
};