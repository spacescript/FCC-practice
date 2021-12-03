function mutation(arr) {
    var tested = arr[0].toLowerCase().split('');
    var given = arr[1].toLowerCase().split('');
    for(let i = 0; i < given.length; i++) {
        if (tested.indexOf(given[i]) === -1) {
            return false;
        }
    }
    return true;
}
  
const test = mutation(["Mary", "Army"]);
console.log(test);