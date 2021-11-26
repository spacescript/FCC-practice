function titleCase(str) {
    
    return str.charAt(0).toUpperCase() + str.slice(1);
}
  
const test = titleCase("I'm a little tea pot");
console.log(test);