let magicians = ["Diya", "Hoorain", "Arisha"];

const magicians_modFunc = (magicians) => {
    for(i = 0; i<magicians.length; i++){
        magicians[i] = "Mr. "+magicians[i];
    }
}

const show_magicians = (magicians) => {
    for(i = 0; i<magicians.length; i++){
        console.log(magicians[i]);
    }
}

magicians_modFunc(magicians)
show_magicians(magicians);