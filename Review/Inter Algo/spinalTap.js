function spinalCase(str) {
    var regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2"); 
    return str.replace(regex, "-").toLowerCase();
}
  
const test = spinalCase('thisIsSpinalTap');
console.log(test);