function largestOfFour(arr) {
  const result = [];
  for(let i=0 ; i < arr.length; i++){
    const subArray = arr[i];
    let maximum = subArray[0];
    for(let j=1; j < subArray.length; j++){
      const element = subArray[j];
      if(element > maximum){
        maximum = element;
      }
    }
    result.push(maximum);
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);