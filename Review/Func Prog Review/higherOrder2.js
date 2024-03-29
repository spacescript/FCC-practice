const squareList = arr => {
    // Only change code below this line
    return arr.reduce((sqrIntegers, num) => {
        return Number.isInteger(num) && num > 0
            ? sqrIntegers.concat(num * num)
            : sqrIntegers;
    }, []);
    // Only change code above this line
};
  
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);