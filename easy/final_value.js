var finalValueAfterOperations = function(operations) {
  let result = 0;
  for (let x of operations) {
      if (x === "--X" || x === "X--") {
          result--;
      } else {
          result++;
      }
  }
  return result
};