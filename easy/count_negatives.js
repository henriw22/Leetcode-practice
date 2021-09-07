var countNegatives = function(grid) {
  let count = 0
  grid.forEach( elm => {
      for (let i = 0; i < elm.length; i++) {
          if (elm[i] < 0) {
              count++;
          }
      }
  })
  return count;
};