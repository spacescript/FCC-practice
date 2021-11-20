function booWho(bool) {
    return typeof bool === "boolean";
}
  
const test = booWho(null);
console.log(test);