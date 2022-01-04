function translatePigLatin(str) {
    var regex = /([^a,e,i,o,u])+/;
    var tester = str.split("")[0];
    if(regex.test(tester) === true){
        var piggy = str.match(regex)[0];
        return str.replace(regex, "").concat(piggy, "ay");
    } else {
        return str.concat("way");
    };
}
  
const test = translatePigLatin("glove");
console.log(test);