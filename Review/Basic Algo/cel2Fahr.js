function convertToF(celsius) {
    let fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}
  
const test = convertToF(30);
console.log(test);