let usernames = [];
if (usernames.length == 0){
    console.log("We need to find some users!");
}
for (i =0; i<usernames.length; i++){
    
    if (usernames[i] == "admin"){
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello "+ usernames[i]+ " you logged in");
    }
}