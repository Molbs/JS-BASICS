const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage();
const myArray = [1, 2, 3, 4]
const myDiv = document.getElementById('main')
for (const prop of myArray) {
    myDiv.innerHTML += `<p>${prop}</p>`
}

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayGreet(){
        console.log(`Hello there, my name is ${this.name} and am ${this.age}.It is really nice to meet you :)`);
    }
}
const persons = new Person("Nielsen", 24)
 persons.sayGreet()
 console.log("hey There");