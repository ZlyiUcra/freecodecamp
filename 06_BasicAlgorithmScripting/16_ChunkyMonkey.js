function chunkArrayInGroups(arr, size) {
  let result = [];
  for(let i =0; i <arr.length; i+=size){
    result.push(arr.slice(i, Math.min(i+size, arr.length)));
  }
  console.log(result)
  return result; 
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);