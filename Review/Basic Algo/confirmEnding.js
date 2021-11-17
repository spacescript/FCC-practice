function confirmEnding(str, target) {
    // const lastLetter = str.split('')[(str.length - 1)];
    // return lastLetter == target ? true : false;
    return str.slice(str.length - target.length) === target;
}
  
const test = confirmEnding("Bastian", "n");
console.log(test);