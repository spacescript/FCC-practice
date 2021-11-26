function titleCase(str) {
    const mySet = str.split(' ');
    let newSentence = [];
    for(let i = 0; i < mySet.length; i++) {
        newSentence.push(mySet[i].charAt(0).toUpperCase() + str.slice(1));
        // return newSentence.push(mySet[i]);
    }
    return newSentence;
}
  
const test = titleCase("I'm a little tea pot");
console.log(test);