var minimumSum = function(num) {
  const data = Array.from(String(num)).sort((a,b) => a - b);
  const num1 = Number(data[0]) * 10 + Number(data[2]);
  const num2 = Number(data[1]) * 10 + Number(data[3]);
  return num1 + num2;
};