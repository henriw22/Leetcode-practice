var sumOfUnique = function(nums) {
  let map = {};
  for (let x of nums) {
      if (map[x]) {
          map[x]++;
      } else {
          map[x] = 1;
      }
  }
  
  return Object.entries(map).reduce((a, [key, value]) => {
      if (value === 1) return a + Number(key);
      return a;
  }, 0);
};