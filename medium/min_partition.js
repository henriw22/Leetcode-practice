var minPartitions = function(n) {
  let maxNumber = 0;
  for (let i = 0; i < n.length; i++) {
      if (Number(n[i]) > maxNumber) {
          maxNumber = Number(n[i]);
      }
  }
  return maxNumber;
};