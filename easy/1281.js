var subtractProductAndSum = function(n) {
  const numbers = n.toString().split("");
  let digits = 1;
  let sum = 0;
  numbers.forEach((e) => {
      digits *= e;
      sum += Number(e);
  })
  return digits - sum;
};