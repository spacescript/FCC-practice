function spinalCase(str) {
    // let reg = /[\W_]+/gm;


    let regex = /\s+|_+/g;

    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // return str.replace(/([a-z])([A-Z])/g, "$1 $2");

    return str.replace(regex,"-").toLowerCase();


//       // Create a variable for the white space and underscores.
//   var regex = /\s+|_+/g;

//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

//   // Replace space and underscore with -
//   return str.replace(regex, "-").toLowerCase();
}
  
var result = spinalCase('This Is Spinal Tap');
var result2 = spinalCase('thisIsSpinalTap');
var result3 = spinalCase('The_Andy_Griffith_Show');
var result4 = spinalCase('Teletubbies say Eh-oh');
var result5 = spinalCase('AllThe-small Things');

console.log(result + "\n" + result2 + "\n" + result3 + "\n" + result4 + "\n" + result5);