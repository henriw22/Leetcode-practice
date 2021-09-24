var maxProductDifference = function(nums) {
  const increasing = [...nums];
  increasing.sort((a, b) => a - b);
  const decreasing = [...nums];
  decreasing.sort((a, b) => b - a);
  console.log(increasing);
  console.log(decreasing);
  return (decreasing[0] * decreasing[1]) - (increasing[0] * increasing[1]);
};