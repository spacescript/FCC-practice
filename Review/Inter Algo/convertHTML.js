function convertHTML(str) {
    var mySet = str.split('');
    for(let i = 0; i < mySet.length; i++) {
        switch(mySet[i]) {
            case '&':
                mySet[i] = '&amp;';
                break;
            case '<':
                mySet[i] = '&lt;';
                break;
            case '>':
                mySet[i] = '&gt;';
                break;
            case '"':
                mySet[i] = '&quot;';
                break;
            case "'":
                mySet[i] = '&apos;';
                break;
        }
    }
    return mySet.join('');
}
  
const test = convertHTML("Dolce & Gabbana");
console.log(test);