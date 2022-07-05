function mutation(arr) {
  const baseArr = arr[0].toLowerCase().split('');
  const mutatorArr = arr[1].toLowerCase().split('');

  const mutatorCorrespond = [];
  for(let i = 0; i<mutatorArr.length; i++){
    mutatorCorrespond.push(baseArr.indexOf(mutatorArr[i]))
  }
  return mutatorCorrespond.indexOf(-1) === -1;
}

mutation(["hello", "hey"]);