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
/*
  - "A Promise is a proxy for a value not necessarily known
  when the promise is created" - Mozilla Developer Network
  - Promises (similar to callbacks) are used for async computations
  - Think of a promise as representing as a value that may be available
  now, later, or never
  - Can associate a handler with an async action
  - A promise exists in three states:
    - Pending: initial state, not fulfilled
    - Fulfilled: OK! Got it
    - Rejected: failed
*/ 

  const testPromise = new Promise((resolve, reject) =>{
    if(Math.random() > 0.5){
      reject("promise no good! rejected")
    }
    setTimeout(() =>{
      resolve("Promise Ok!")
    }, 1000);
  });

  testPromise.then((resolveMessage) =>{
    console.log(`Looks like: ${resolveMessage}`);
  }).then(() =>{
    console.log("i should run after the promise is resolved");
  }).catch((rejectMessage) =>{
    console.log(`Error: ${rejectMessage}`);
  });

  function numAdder (num1, num2){
    return new Promise((resolve, reject) =>{
      // if(Math.random() > 0.5) {
      //   reject("Oops, something's not right")
      // }
      // const addedNum = num1 + num2;
      setTimeout(() =>{
        resolve(num1 + num2)
      },1000);
    });
  }

  function numSquarer(num){
    return new Promise((resolve, reject) =>{
      // if(Math.random() > 0.5) {
      //   reject("Oops, something's not right")
      // }
    setTimeout(() =>{
        resolve(num * num)
      },800);
    });
  }
 numAdder(12, 13).then((data) => {
  console.log(`Total is: ${data}`)
 });
 numAdder(12, 13).then((data) => {
  return numSquarer(data);
 }).then((moreData) => {
  console.log(`Square is: ${moreData}`) }).catch((errorMessage) =>{
    console.log(errorMessage);

  });
Promise.resolve("a string sentence").then((data) => {
  console.log(data);
});

function alwaysResolve(){
  return Promise.resolve('I love resolving :D');
}

alwaysResolve().then(data => console.log(data));
// const list = [];
// const number = [100, 120,35];
// list.push(number)
// const lists = []

const prom = Promise.resolve([12, 15, 34]);
prom.then(data=>
  data.map(num => num *10)).then(transformedData => console.log(transformedData))

const anotherProm = Promise.resolve({text: "resolved :D",
name: 'Moses'});
anotherProm.then(data => console.log(`${data.name}' issue is ${data.text}`));

// rejected Promises

// Promise.reject().then(() => console.log('Okay')).catch(() => console.log("Caught rejected promise"));
Promise.resolve().then(res => {
  // console.log('Not rejected');
  return Promise.reject('Rejected inner promise');
},
err => { 
  console.log('rejected');
}).catch(data => console.log(data));
