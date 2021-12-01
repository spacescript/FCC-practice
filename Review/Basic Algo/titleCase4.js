function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, W => W.toUpperCase());
}
  
const test = titleCase("I'm a little tea pot");
console.log(test);