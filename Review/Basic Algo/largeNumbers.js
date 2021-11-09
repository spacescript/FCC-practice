function largestOfFour(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        answer.push(Math.max(...arr[i].flat()));
    }
    return answer;
    // return Math.max(arr[0].flat());
    // const firstArr = (arr[0].flat().map(Number));
    // return Math.max(...arr[0].flat());
    // return arr[0].flat();
    // return typeof(arr[0].flat()[0]);
    // return arr[0].flat()[1];
}
  
const test = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(test);