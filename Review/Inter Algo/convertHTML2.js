function convertHTML(str) {
    var htmlRegex = /([&<>\"'])/g;

    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    }

    return str.replace(htmlRegex, match => htmlEntities[match]);
}
  
const test = convertHTML('Stuff in "quotation marks"');
console.log(test);