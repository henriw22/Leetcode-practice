var truncateSentence = function(s, k) {
  const words = s.split(" ");
  console.log(words);
  const result = [];
  for (let i = 0; i < k; i++) {
      result.push(words[i]);
  }
  return result.join(" ");
};