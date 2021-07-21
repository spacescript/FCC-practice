function convertHTML(str) {
    var solution = str.split('');
    for(let i = 0; i < solution.length; i++) {
        switch(solution[i]) {
            case "&":
                solution[i] = "&amp;";
                break;
            case "<":
                solution[i] = "&lt;";
                break;
            case ">":
                solution[i] = "&gt;";
                break;
            case '"':
                solution[i] = "&quot;";
                break;
            case "'":
                solution[i] = "&apos;";
                break;
        }
    }
    solution = solution.join("");

    return solution;
}
  
var test = convertHTML("Dolce & Gabbana");
console.log(test);