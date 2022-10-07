function car(manufacturer, model, ...others){
    if(others.length == 0){
        console.log("manufacturer: " + manufacturer + " model: " + model);
    } else {
        console.log("manufacturer: " + manufacturer + " model: " + model + " other features: " + others);
    }
}

car("suzuki", 1992, "red");
