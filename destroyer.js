function destroyer(arr) {
    var modArgArr = [];
    for(let i = 1; i < arguments.length; i++) {
       modArgArr.push(arguments[i]);
    }

    var myArr = arguments[0];

    for(let i = 0; i < myArr.length; i++) {
        for(let j = 0; j < modArgArr.length; j++) {
            if(myArr[i] === modArgArr[j]) {
                delete myArr[i];
            }
        }
    }

    return myArr.filter(item => item !== null);
}
  
var sample = destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(sample);