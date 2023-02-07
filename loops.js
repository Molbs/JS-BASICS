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
// for loops - repeats until a specified condition evaluates to false
/*
for(initial expression;condition; increment expression){
    statement
}
*/
let indice = 0;
for(indice;indice<10;indice += 2){
    console.log(indice);
}
const iceCream = ["vanilla","Chocolate","StrawBerry","Cocktail"];

for(let items=0; items < iceCream.length; items+=2){
    console.log(iceCream[items]);
}

// inside a function
const iceList = (arr) =>{
    for(let item =0;item<arr.length;item+=1){
        console.table(arr[item]);
    }
}
iceList(iceCream);
for(let number = 1;number<=100;number+=1){
    if(number%3===0 && number%5===0){
        console.log("fizzBuzz");
    }
    else if(number%3===0){
        console.log("fizz");
    }
    else if(number%5===0){
        console.log("Buzz");

    }
    else{
        console.log(number)
    };
};
// continue function skips a certain statement

for(let number = 1;number<=100;number+=1){
    if(number%3===0 && number%5===0){
        continue;
    }
    else if(number%3===0){
        continue
    }
    else if(number%5===0){
        continue

    }
    else{
        console.log(number)
    };
};
// inner loops
// for(let i = 0;i<4;i+=1){
//     console.log("loop #" + i);
//     for(let a = 0; a<3;a+=1){
//         console.log("Inner loop #" + a)
//     }
// }
outerLoop:
for(let i = 0;i<5;i+=1){
    console.log("loop #" + i);
    for(let a = 0; a<3;a+=1){
        console.log("Inner loop #" + a);
        if(a===2){
            break outerLoop;
        }
    }
}
