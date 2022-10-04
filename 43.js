let magicians = ["Diya", "Hoorain", "Arisha"];
let mr_magicians = [];

const magicians_modFunc = (magicians) => {
    for(i = 0; i<magicians.length; i++){
        mr_magicians[i] = "Mr. "+magicians[i];
        console.log( mr_magicians);
    }
}

const show_magicians = (magicians) => {
    for(i = 0; i<magicians.length; i++){
        console.log(magicians[i]);
    }
}
const unchanged_show_magicians = (magicians) => {
    for(i = 0; i<magicians.length; i++){
        console.log(magicians[i]);
    }
}

magicians_modFunc(mr_magicians);

show_magicians(magicians);