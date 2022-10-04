let numbers = [1,2,3,4,5,6,7,8,9];

for (i = 0; i < numbers.length; i++){
    if(numbers[i] == 1 ){
        console.log("1st");
    } else if(numbers[i] == 2){
        console.log("2nd");
    } else if(numbers[i] == 3){
        console.log("3rd");
    } else {
        console.log(numbers[i]+"th");
    }
} 