// Only change code below this line
function urlSlug(title) {
    // var answer = title.toLowerCase().replace(/\s/g, '-');
    // var answer = title.toLowerCase().split(" ").join("-").replace(/\s/g, '-'); 
    var answer = title.toLowerCase().split(" ").filter(function(x) {return x != ''}).join("-");
    return answer;
}
// Only change code above this line

console.log(urlSlug(" This is a test"));