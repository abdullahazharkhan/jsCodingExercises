let persons = ["huzaifa", "samar", "hania", "umar"];

console.log("come to dinner,"+ persons[0]);
console.log("come to dinner,"+ persons[1] );
console.log( "come to dinner,"+ persons[2]);
console.log( "come to dinner,"+ persons[3]);

console.log( persons[1]+ "cant make it to dinner");


persons[1]="Abdullah";
console.log("come to dinner,"+ persons[0]);
console.log("come to dinner,"+ persons[1] );
console.log( "come to dinner,"+ persons[2]);
console.log( "come to dinner,"+ persons[3]);


console.log("hey guys i just found a bigger table");

persons.unshift("Azhar");
persons.splice(2, 0, 'Roomi');
persons.push("Ahmed");

console.log("come to dinner again,"+ persons[0]);
console.log("come to dinner again,"+ persons[1] );
console.log( "come to dinner again,"+ persons[2]);
console.log( "come to dinner again,"+ persons[3]);
console.log("come to dinner again,"+ persons[4]);
console.log("come to dinner again,"+ persons[5] );
console.log( "come to dinner again,"+ persons[6]);