var average = function(salary) {
  salary.sort((a,b) => a - b);
  salary.splice(0, 1);
  salary.splice(salary.length - 1,  1);
  const sum = salary.reduce((a, b) => a + b, 0);
  return (sum/(salary.length)).toFixed(5)
};