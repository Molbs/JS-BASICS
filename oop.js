// Object-oriented javascript
/*
- OOp: basic is that you use objects to represent real world things. Objects have own properties and functions(methods)
Objects can contain data and other code to represent info about what you're trying to model
- data/methods inside the object is encapsulated (can not be accessed outside)
- In classic OOP, class is defined, then, when an instance of that class is created, all the properties and methods are copied.
- JS is dynamic and does not provide a traditional class implementation per se.
- Js inheritance is prototype based.
- each object has a private property called the prototype.
- The prototype can have a prototype of its own. 
- Nearly all objects in javaScript are instances of Object which sits on top of the prototype chain.
- the prototype property's value is an object
-It's like a bucket to store properties and methods
- Prototype as a template and can have prototype properties of its own
- the prototype property is where inherited members are defined
- 
*/
// example
/* function Ship(){
    this.float = true;
    this.material = "steel"
}


const myShip = new Ship();
console.log(myShip.material);*/

const myObj = {
    a:1,
    b:2
}

myObj.nationality = "kenya"

console.log(myObj);
/* Does myObj have a method called valueOf()?
- No
- Does the Object have a method called valueOf()?
- yes*/
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
  
  var person1 = new Person("Alice", 25);
  person1.greet(); // logs "Hello, my name is Alice and I am 25 years old."
  
  var person2 = new Person("Bob", 30);
  person2.greet(); // logs "Hello, my name is Bob and I am 30 years old."
  console.log(Object.keys(myObj));
  console.log(myObj.hasOwnProperty('nationality')); 
  
  const myArray = ["Man utd", "Man City", "Arsenal", "Newcastle"]

  myArray.push("Tote");
  console.log(myArray);
  console.log(Array.prototype);

  const person = {
    name: "Nielsen",
    age: 25,
    state: "Nairobi",
    sayName: function (){
        console.log(`My name is ${this.name} and i am ${this.age} years old`);
    }
  }

//   make a copy of person object:
const person3 = Object.create(person);
person3.name = "Moses", person3.age = 24;
person3.sayName();
const person4 = Object.create(person3);
console.log(person4.hasOwnProperty('name'));
console.log(person.hasOwnProperty('name'));