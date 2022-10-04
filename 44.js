function sandwich(){
    for (i = 0; i < arguments.length; i++ ){
        console.log("Things should be on a sandwich: ");
        console.log(arguments[i]);
    }
}

sandwich("kebab", "patty", "ketcup");