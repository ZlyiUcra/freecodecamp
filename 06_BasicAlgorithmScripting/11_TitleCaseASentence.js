function capitilizeWord(str){
  const firstLetter = str[0].toUpperCase();
  const rest = str.toLowerCase().split('').splice(1, str.length).join('');
  return firstLetter+rest;
}
function titleCase(str) {
  const words = str.split(' ');
  const finalWord = [];
  for(let i=0; i<words.length; i++){
    finalWord.push(capitilizeWord(words[i]))
  }
  

  return finalWord.join(' ');
}

titleCase("I'm a little tea pot");