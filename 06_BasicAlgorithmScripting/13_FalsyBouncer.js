function bouncer(arr) {
  for(let i = arr.length-1; i >=0; i--){
    if ( Boolean(arr[i]) === false) {
      arr.splice(i, 1);
    }
  }
  console.log(arr)
  return arr;
}

bouncer([7, "ate", "", false, 9]);