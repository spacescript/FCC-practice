function titleCase(str) {
    const mySet = str.split(' ');
    for(let i = 0; i < mySet.length; i++) {
        let tempSet = mySet[i].split('');
        
    }
    let newSet = mySet[0].split('');
    return newSet;
}
  
const test = titleCase("I'm a little tea pot");
console.log(test);