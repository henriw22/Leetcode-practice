var reverseWords = function(s) {
  let result = "";
  let data = s.split(" ");
  data.forEach(e => {
      for (let i = e.length - 1; i >= 0; i--) {
          result += e[i];
      }
      result += " ";
  })
  return result.trim();
};