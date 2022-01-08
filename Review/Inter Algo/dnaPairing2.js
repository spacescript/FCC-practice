function pairElement(str) {
    var answer = [];
    var geneCoder = function(letter) {
        switch(letter) {
            case "A":
                answer.push(["A", "T"]);
                break;
            case "T":
                answer.push(["T", "A"]);
                break;
            case "C":
                answer.push(["C", "G"]);
                break;
            case "G":
                answer.push(["G", "C"]);
                break;
            }
    };

    for(let i = 0; i < str.length; i++) {
        geneCoder(str[i]);
    }

    return answer;
}
  
const test = pairElement("GCG");
console.log(test);