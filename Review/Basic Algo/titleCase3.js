function titleCase(str) {
    var words = str.toLowerCase().split(" ");
    var cased = words.map(function(word){
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    })
    return cased.join(" ");
}
  
const test = titleCase("I'm a little tea pot");
console.log(test);