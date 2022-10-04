function car(...args){
    return args.reduce(function (manufacturer, model) {
        const details ={
            manufacturer: manufacturer,
            model: model
        }
        console.log("Manufacturer: "+ details.manufacturer);
    console.log("Model: "+ details.model);
    console.log("other features: ");
    console.log(args);
      })
    
    
    
}

car("suzuku", 1992);