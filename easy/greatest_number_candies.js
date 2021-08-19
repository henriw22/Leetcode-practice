var kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((x) => {
      if ((x + extraCandies) >= max) {
          return true;
      }
      return false;
  });
};