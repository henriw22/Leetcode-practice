var mostWordsFound = function(sentences) {
  let maxWords = 0;
    sentences.forEach (e => {
        const words = e.split(" ");
        const totalWords = words.length;
        if (totalWords > maxWords) {
            maxWords = totalWords
        }        
    })
  return maxWords;
};
