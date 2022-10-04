const make_tshirt = (size = "large", text = "I love JS") => {
    if(size == "medium"){
        console.log("Size of a shirt is "+ size+ " and it has I LOve JS printed on it");
    } else {
        console.log("Size of a shirt is "+ size+ " and it has "+ text + " printed on it");
    }
    

}

make_tshirt(3, "Hello");