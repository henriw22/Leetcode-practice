var maxWidthOfVerticalArea = function(points) {
  let widestArea = 0;
  const x = [];
  for (let point of points) {
      x.push(point[0]);
  }
  const sortedX = x.sort((a,b) => a - b);
  console.log(sortedX);
  for (let i = 0; i < sortedX.length - 1; i++) {
      const width = sortedX[i+1] - sortedX[i];
      if (width > widestArea) {
          widestArea = width; 
      }
  }
  return widestArea;
};