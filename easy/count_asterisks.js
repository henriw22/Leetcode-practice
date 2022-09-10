var countAsterisks = function(s) {
  const data = s.split("|");
  let count = 0;
  for (let i = 0; i < data.length; i += 2) {
      for (let j = 0; j < data[i].length; j++) {
          if (data[i][j] === "*") {
              count++;
          }
      }
  }
  return count;
};