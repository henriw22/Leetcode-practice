var largestAltitude = function(gain) {
  let highest = 0;
  let position = 0;
  for (let i = 0; i < gain.length; i++) {
      position += gain[i];
      if (position > highest) {
          highest = position;
      }
  }
  return highest;
};