function truthCheck(collection, pre) {
    // var answer = [collection[1][pre]];
    // for(let i = 0; i < collection.length; i++) {
    //     // if(collection[i].hasOwnProperty(pre)) {numberAnswers += 1};
    //     answer.push(collection.map(x => x.pre));
    // }
    // if(collection.every(item => item.hasOwnProperty(pre))) {
    //     for(let i = 0; i < collection.length; i++) {
    //         return collection.every()
    //     }
    // };
    return collection.every(item => item.hasOwnProperty(pre)) && collection.every(item => Boolean(item[pre]));
    // return collection.every(item => item.hasOwnProperty(pre)) && collection.every(item => item[pre] != false);
    // return collection[2][pre] != false;
}
  
const test = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(test);