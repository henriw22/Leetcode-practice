var wateringPlants = function(plants, capacity) {
  let water = capacity;
  let result = 0;
  for (let i = 0; i < plants.length; i++) {
      if (water >= plants[i]) {
          water -= plants[i];
          result += 1;
      } else {
          result += 2 * i + 1;
          water = capacity;
          water -= plants[i];
      }
  }
  return result;
};