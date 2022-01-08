function pairElement(str) {
    // return str.split("").map(function(letter) {
    //     switch(letter) {
    //         case "A":
    //             this.push("T");
    //             break;
    //         case "T":
    //             this.push("A");
    //             break;
    //         case "C":
    //             this.push("G");
    //             break;
    //         case "G":
    //             this.push("C");
    //             break;
    //     }
    // });
    var array = str.split("");
    if(array[0] == "G") {
        array
            // .splice(0,0)
            .replace("G", ["G", "C"]);
        // return array.shift();
    }
    return array;
}
  
const test = pairElement("GCG");
console.log(test);