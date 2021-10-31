function findLongestWordLength(str) {
    const words = str.split(" ");
    let answer = words[0].length;
    for(let i = 1; i < words.length; i++) {
        if(answer < words[i].length){
            answer = words[i].length;
        }
    }
    return answer;
}
  
const test = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(test);