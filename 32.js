let current_users = ["abdullah", "admin", "umar", "amna", "marium"];
let new_users = ["Nazneen", "Danish", "Azhar", "abdullah", "Zayyam"];

const lowerCurrentUsers = [];
const lowerNewUsers = [];

current_users.forEach(e => {
  lowerCurrentUsers.push(e.toLowerCase());
});

new_users.forEach(e => {
    lowerNewUsers.push(e.toLowerCase());
});

for (i = 0; i < lowerNewUsers.length; i++){
    if(lowerCurrentUsers.includes(lowerNewUsers[i])){
        console.log("username is taken");
    } else {
        console.log("ready to go!");
    }
}