// a quick and easy way to do something repeatedly
// 1. while loop
let numberOfLoops = 0;
while(numberOfLoops <= 10){
    numberOfLoops +=2;
    // console.log("I am looping");
};
// breaking a loop
let num1 = 0;
let num2 = 0;
while(num1 < 100){
    num1 += 5;
    num2 += num1;
    if(num1 === 50){
        break
    }
}
console.log(num2);
// initializing a function inside a loop
let num3 = 0;
let num4 = 0;
while(num3 < 20){
    num3 +=2;
    loopDeLoop();

}
function loopDeLoop(){
    // console.log("this is a loop!!");
} 
// indexes
const names = ["Nielsen", "Moses", "Joy", "Maria"];
let index = 0;
while (index < names.length){
    if (names[index] === "Joy"){
        console.log(names[index]);
        break;
    }
    index +=1;
}
console.log(index);

// embedding into function
const nameLooper = (arr,username) => {
    index = 0;
    while(index < arr.length){
        if (arr[index] === username){
            console.log(arr[index])
            break
        }
        index +=1;
    }
}
nameLooper(names,"Maria")

// do...while loop - execute at least once
/*
do {
    statement
}while(condition)
*/
let trial;
do{
    console.log("looping");
    trial;
}while(trial);

let shouldRunOnlyOnce = true;
let indexN = 0;
do{
    console.log("loop");
    indexN += 2;
    if(indexN === 10){
        shouldRunOnlyOnce = false;
    }
} while(shouldRunOnlyOnce);

// user
let condition; /*condition = false*/
do {
    const userInput = "q";
    if (userInput === "q"){
        console.log("Goodbye");
        condition; /*condition = false */
    }
    else{
        condition = true;
    }
} while(condition);
//  using a function
let balance = 2000;
do {
    purchasePower()
} while(balance > 4000);

function purchasePower(){
    if (balance > 4000){
        console.log("can purchase :)");
    }
    else{
        console.log("sorry, low balance :(");
    };
}