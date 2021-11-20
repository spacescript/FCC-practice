function booWho(bool) {
    return typeof(bool) === Boolean == true ? true : false;
}
  
const test = booWho(null);
console.log(test);