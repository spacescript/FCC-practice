function confirmEnding(str, target) {
    const lastLetter = str.split('')[(str.length - 1)];
    return lastLetter == target ? true : false;
}
  
const test = confirmEnding("Bastian", "n");
console.log(test);