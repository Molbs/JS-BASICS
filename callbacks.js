/* - A callback function is a function that is passed to another function
as a parameter.
- This inner function is called at some point during the execution
of the containing function
- In other words, it's "called back" at some specified point
inside the containing function's body */

function shouldGoFirst(pop){
    setTimeout(() =>{
        console.log("I should always go first");
        pop();
    }, 1000);
    
    
}

function shouldGoSecond(){
    console.log("I should always go second");
}

// shouldGoFirst(shouldGoSecond);
// shouldGoSecond();
function sumUpNumber(num1, num2, cb){
    // const sumValue = num1 + num2;
    let sumValue;
    setTimeout(() => {
        sumValue = num1 + num2;
    }, 1000)
    setTimeout(() =>{
        cb(sumValue );
    },1500)
    
}

function total(value){
    console.log(`The sum is: ${value}`);
} 

// sumUpNumber(22, 43, total);

// callback function
 function sayWhenDone(loopCounter){
    console.log(`done :D - Looped ${loopCounter} times.`);
 }

// parent function

function looper(number, cb){
    let i = 0;
    for( i; i < number; i+=1){
            // console.log(i);
    }
    cb(i)
}

looper(6, sayWhenDone);