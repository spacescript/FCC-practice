function pairElement(str) {
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };

    var array = str.split("");
    return array.map(x => [x, pairs[x]]);
}
  
const test = pairElement("GATTACA");
console.log(test);