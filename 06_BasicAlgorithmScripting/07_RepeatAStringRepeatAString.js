function repeatStringNumTimes(str, num) {
  let result ="";
  if(num > 0) {
    for(let i=0; i < num; i++){
      result += str;
    }
  }
  return result;
}

repeatStringNumTimes("abc", 3);