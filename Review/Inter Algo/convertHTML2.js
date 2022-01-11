function convertHTML(str) {
    var htmlRegex = /([\&\<\>\"\'])/g;

    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quote;",
        "'": "&apos;",
    }

    return str.replace(htmlRegex, match => htmlEntities[match]);
}
  
const test = convertHTML("Dolce & Gabbana");
console.log(test);