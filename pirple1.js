// functions
function greet(name){
    console.log(`Hello ${name}`); 
}
let user = 'Nielsen';

// invoking te function
greet('John'); 

// addition function

function addition(num1,num2){
    return num1+num2;
}

let numberOne = addition(3,4);
let numberTwo = addition(7,9);
function multiplier(first,second){
    return first*second;
}
console.log(addition(15,10));
console.log(multiplier(numberOne,numberTwo));
// declaring functions using variables
let square = function (num){
    return num*num;
}
const add = function(numF,numS){
    return numF + numS;
}

const answer = square(2);
const answer1 = square(3);
const answer3 = add(answer,answer1);
console.log(answer3);
// calling a function within a function
console.log(add(square(4),square(3)));

const squared = function(num){
    return num *num;
}
const numAdder = function(squarer,num2){
    const squared  = squarer(4);
    return squared + num2;
}
console.log(numAdder(squared,10))
console.log(squared(3));
// how functions can change value of a variable
const myInfo = {
    name: "Nielsen",
    age: 24
}
function changeAge(myObj){
    myObj.age +=2;
}
console.log(myInfo);
changeAge(myInfo);
console.log(myInfo);
