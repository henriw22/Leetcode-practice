var findWinners = function(matches) {
  const data = {};
  const noLoss = [];
  const lostOne = [];
  
  for (let match of matches) {
      if (!data[match[0]]) {
          data[match[0]] = [];
      }
      if (data[match[1]]) {
          data[match[1]].push(match[0]);
      } else {
          data[match[1]] = [match[0]];
      }
  }

  for (let key in data) {
      if (data[key].length === 0) {
          noLoss.push(key);
      } if (data[key].length === 1) {
          lostOne.push(key);
      }
  }
  return [noLoss,lostOne];
};