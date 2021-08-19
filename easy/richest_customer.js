var maximumWealth = function(accounts) {
  let result = 0;
  for (let x of accounts) {
      let sum = x.reduce((accumulator, currentValue) => accumulator + currentValue);
      if (sum > result) {
          result = sum;
      }
  }
  return result;
};