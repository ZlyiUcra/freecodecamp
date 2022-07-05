function getIndexToIns(arr, num) {
  let sortedArr = [...arr, num].sort((a, b) => Number(a)-Number(b));;
  console.log(sortedArr, sortedArr.indexOf(num))
  return sortedArr.indexOf(num)
}

getIndexToIns([40, 60], 50);