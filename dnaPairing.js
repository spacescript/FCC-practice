function pairElement(str) {
    var list = str.split("");
    
    function pairing(letter) {
        switch(letter) {
            case 'A':
                return ["A", "T"];
            case 'T':
                return ["T", "A"];
            case 'C':
                return ["C", "G"];
            case 'G':
                return ["G", "C"];
        }
    }

    list.map()

    return pairing(list[3]);

    // return str;
}

var test = pairElement("ATCGA");
console.log(test);