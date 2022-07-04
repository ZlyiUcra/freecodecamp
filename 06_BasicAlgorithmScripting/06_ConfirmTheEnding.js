function confirmEnding(str, target) {
  const strArray = str.split('');
  const strEnd = strArray.splice(strArray.length - target.length, strArray.length -1);
  const strEndString = strEnd.join('');
  return strEndString === target;
}

confirmEnding("Bastian", "n");