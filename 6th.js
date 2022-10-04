let name = "Abdullah";
let whitespaced = "Name: \t "+  name + "\n" + name;
console.log(whitespaced);
console.log(whitespaced.replace(/[\t\n]/gm, ''));
