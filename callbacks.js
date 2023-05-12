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
    for( i; i < number; i++){
            // console.log(i);
    }
    cb(i)
}


// looper(100, sayWhenDone);
function nameLooper(arr, cb){
    let i = 0;
    for( i; i < arr.length; i++){
        const name = arr[i];
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        arr[i] = capitalizedName;
    }
    cb(i)
}

function sayWhen(loopCounter){
    console.log(`done :D - Capitalized ${loopCounter} names.`);
 }
const myNames = ["nielsen", "maria", "nats", "junior"]

// nameLooper(myNames, sayWhen);
// console.log(myNames);

function anotherLogger(num1, num2, somethingElse) {
    const squaredAndSummedNum = (num1 * num1) + (num2 * num2);
    console.log(squaredAndSummedNum);
    if (somethingElse) {
      somethingElse(squaredAndSummedNum);
    }
  }
  
  anotherLogger(10, 50, function(p) {
    console.log(`Squared and summed = ${p}`);
  });

//   const myDiv = document.getElementById("main");
//   const myButton = myDiv.querySelector("button");
//   const myPara = document.getElementById("content");
//   const fakeData = {
//     text: "This is a fake trial text from the server"
//   }

//   myButton.addEventListener("click", function(){
//     requestData(populateDOM);
//   });

//   function requestData(cb){
//     let data = "Loading..."
//     cb(data);
//       // Fake server request and response
//     setTimeout(() =>{
//         // Response from server:
//         const data = fakeData.text;
//         cb(data)
//     }, 2000)
//   }
//   function populateDOM(data){
//     // myDiv.innerHTML = `<p>${data}</p>`;
//     myPara.innerText = data;
//   }
  function counter() {
    setTimeout(() => {
      console.log("First");
      setTimeout(() => {
        console.log("Second");
        setTimeout(() => {
          console.log("Third");
          setTimeout(() => {
            console.log("Fourth");
          }, 400);
        }, 600);
      }, 800);
    }, 1000);
  }
  
//   counter();
function numCruncher1(num, cb) {
    const newNum = num * num;
    cb(newNum);
  }
  
  function numCruncher2(num, cb) {
    const anotherNewNum = num / 10;
    cb(anotherNewNum);
  }
  
  function totalSum(a, b, cb) {
    cb(a + b);
  }
  
  function crunchNumbers(a, b, cb1, cb2, cb3) {
    cb1(a, function(x) {
      cb2(b, function(y) {
        cb3(x, y, function(result) {
          console.log(result);
        });
      });
    });
  }
// crunchNumbers(5, 10, numCruncher1, numCruncher2, totalSum);

// Promises


  