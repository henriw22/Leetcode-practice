var rearrangeArray = function(nums) {
  let result = [];
  let positive = [];
  let negative = [];
  for (let e of nums) {
      if (e.toString().includes("-")){
          negative.push(e);
      } else {
          positive.push(e);
      }
  }
  for (let i = 0; i < nums.length/2; i++) {
      result.push(positive[i]);
      result.push(negative[i]);
  }
  return result;
};