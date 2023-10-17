const myName = 'Chris';
const person ={
    name:myName,
    age: 22
};

const obj = {...person,
myName};
console.log(obj);
const {name:persons, age} = person;

const sayHi = (name) => {
    console.log(`Hello ${name}, you like you are ${age}`);
}

sayHi(persons)