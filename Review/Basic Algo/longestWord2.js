function findLongestWordLength(str) {
    return str.split(' ')
        .reduce(function(longest, word) {
            return Math.max(longest, word.length)
        }, 0);
}
  
const test = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(test);