function translatePigLatin(str) {
    var regex = /^[^aeiou]+/;

    var findConson = str.match(regex);
    return findConson !== null
    ? str
        .replace(regex, "")
        .concat(findConson)
        .concat("ay")
    : str.concat("way");
}
  
var test = translatePigLatin("glove");
console.log(test);