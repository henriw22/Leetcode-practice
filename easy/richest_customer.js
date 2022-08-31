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

var maximumWealth = function(accounts) {
  let maxWealth = 0;
  accounts.forEach (e => {
      const maxSum = e.reduce((partialSum, a) => partialSum + a, 0);
      if (maxSum > maxWealth) {
          maxWealth = maxSum
      }        
  })
  return maxWealth;
};