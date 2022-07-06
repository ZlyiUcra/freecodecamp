const squareList = arr => {
  // Only change code below this line
  const filteredIntegers = [...arr].filter( i => (i === Math.round(i) && i > 0 ));
  const squaredArray = filteredIntegers.map(i => i*i);
  return squaredArray;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);