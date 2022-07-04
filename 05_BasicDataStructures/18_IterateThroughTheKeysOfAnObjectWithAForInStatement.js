const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
  for(let user in usersObj){
    if(usersObj[user]["online"]){
      result += 1;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users));