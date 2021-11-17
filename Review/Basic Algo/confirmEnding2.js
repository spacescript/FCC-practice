function confirmEnding(str, target) {
    let regex = new RegExp(target + "$", "i");
    return regex.test(str);
}
  
const test = confirmEnding("Bastian", "n");
console.log(test);