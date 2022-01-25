function rot13(str) {
    var mySet = str.split('').map(x => x.charCodeAt(0));

    // function flip13(arr) {
    //     for(let i=0; i < arr.length; i++) {
    //         if (arr[i] > 64 && arr[i] <= 77) {
    //             return arr[i] + 13;
    //         } else if (arr[i] > 77 && arr[i] <= 90) {
    //             return arr[i] - 13;
    //         } else if (arr[i] > 96 && arr[i] <= 109) {
    //             return arr[i] + 13;
    //         } else if (arr[i] > 109 && arr[i] <= 122) {
    //             return arr[i] - 13;
    //         } else {
    //             return arr[i];
    //         }
    //     }
    // }

    function flip13(x) {
        if (x > 64 && x <= 77) {
            return x + 13;
        } else if (x > 77 && x <= 90) {
            return x - 13;
        } else if (x > 96 && x <= 109) {
            return x + 13;
        } else if (x > 109 && x <= 122) {
            return x - 13;
        } else {
            return x;
        }
    }
    
    var flipped = mySet.map(x => flip13(x));

    return String.fromCharCode.apply(String, flipped);
}
  
const test = rot13("SERR PBQR PNZC");
console.log(test);