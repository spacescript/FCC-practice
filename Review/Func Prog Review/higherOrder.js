const squareList = arr => {
    // Only change code below this line
    var answer = arr.filter(num => num > 0).filter(num => Number.isInteger(num)).map(num => num * num);
    return answer;
    // Only change code above this line
};
  
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);