var heightChecker = function(heights) {
  const expected = [...heights];
  let sortedHeights = expected.sort((a,b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
      console.log(heights[i] !== sortedHeights[i]);
      if (heights[i] !== sortedHeights[i]) {
          count++;
      }
  }
  return count;
};