function translatePigLatin(str) {
    var conson = [];
    var regex = /[^aeiou]/;

    var findConson = regex.exec(str);
    // regex.exec(str)[0];

    while(findConson != null) {
        var sliced = str.slice(0,1);
        conson.push(sliced);
    }

    return conson;
}
  
var test = translatePigLatin("glove");
console.log(test);