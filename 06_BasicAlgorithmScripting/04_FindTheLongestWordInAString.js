function findLongestWordLength(str) {
  let result = 0;
  const words = str.split(" ");
  for(let i = 0; i < words.length;i++ ){
    if(words[i].length > result) {
      result = words[i].length;
    }
  }
  return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");