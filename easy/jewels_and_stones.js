var numJewelsInStones = function(jewels, stones) {
  let count = 0;
  let jewelsarr = jewels.split("");
  let stonesarr = stones.split("");
  for (let i = 0; i < jewelsarr.length; i++) {
      for (let j = 0; j < stonesarr.length; j++) {
          if (jewelsarr[i] === stonesarr[j]) {
              count++;
          }
      }
  }
  return count;
};