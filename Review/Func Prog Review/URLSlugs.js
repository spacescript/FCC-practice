// Only change code below this line
function urlSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-");
}
// Only change code above this line

const test = urlSlug("Winter is Coming");
console.log(test);