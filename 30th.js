let usernames = ["abdullah", "admin", "umar", "amna", "marium"];

for (i =0; i<usernames.length; i++){
    if (usernames[i] == "admin"){
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello "+ usernames[i]+ " you logged in");
    }
}