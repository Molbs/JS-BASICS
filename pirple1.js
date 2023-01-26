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

// Nested Functions
//  example 1
function additionMultiply(num1,num2){
    function addition(num1,num2){
        return num1+num2;
    }
    return addition(num1,num2)* addition(num1,num2);
}

console.log(additionMultiply(3,5));
// you can not call a function nested within another function
// nested functions are scope defined i.e items can not be accessed outside the function scope.
function personalInfo(fName,LName,age){
    function nameFormat(arg1,arg2){
        return `${arg1} ${arg2}`
    }
    return `${nameFormat(fName, LName)} is ${age} year(s) old`;
}
console.log(personalInfo('Moses', 'Nielsen', 25));
// Object in nested function example 
function personInfo(fName,Lname,age){
    function nameAdd(arg1,arg2){
        return arg1 + " " + arg2;
    }
    function objData(fullName,age){
        const person = {
            name: fullName,
            age: age
        }
        return person;
    }
    return objData(nameAdd(fName,Lname),age)
}
console.log(personInfo('Nielsen','Moses',24));
// Advanced Functions
const multiply = (num1,num2) => {
    return num1*num2;
};
console.log(multiply(4,5));
// mapping(iteration)
const users = [
    {name:'moses',age:24},
    {name:'nielsen', age:25},
    {name:'alukwe', age:36}
];
const userName = users.map( (user) =>{
    return user.name;
})
console.log(userName);
// end of mapping
// a function for mapping
const mapUser = (myArray) =>{
    const userName = myArray.map( (user) =>{
        return user.name;
    })
    return userName
}
console.log(mapUser(users));
// skip bracket when one expression is expected example
const multiplies = (num1,num2) => num1*num2;
console.log(multiplies(4,5));