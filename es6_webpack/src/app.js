import Person from './person';
import { hello, world } from './hello';
import sayHello from './hello';
import myApi from './api';
// import {person} from './person'
const myName = 'Chris';
const person1 ={
    name:myName,
    age: 22
};
const obj = {...person1,
myName};
console.log(obj);
const {name:persons, age} = person1;

const sayHi = (name) => {
    console.log(`Hello ${name}, you look like you are ${age}`);
}

sayHi(persons)

const mNielsen = new Person('Nielsen', 26)
console.log(mNielsen, hello, world);
document.body.appendChild(sayHello());
myApi.greet(mNielsen.name);