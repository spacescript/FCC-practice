function truthCheck(collection, pre) {
    var answer = [];
    for(let i = 0; i < collection.length; i++) {
        // if(collection[i].hasOwnProperty(pre)) {numberAnswers += 1};
        answer.push(Object.entries(collection[i]));
    }
    //  return collection.every(item => item.hasOwnProperty(pre));
    return answer;
}
  
const test = truthCheck([{"single": ""}, {"single": "double"}], "single");
console.log(test);