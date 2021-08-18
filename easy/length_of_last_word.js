var lengthOfLastWord = function(s) {
  const words = s.trim().replace(/\W+/g, " ").split(' ');
  return words[words.length - 1].length;
};