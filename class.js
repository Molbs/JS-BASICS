/* - Classes in ES6 are just syntactical sugar over javascript's existing prototype-based inheritance 
   - Simple, clean syntax to create objects and take care of inheritance
   - Pre-ES6 way:
    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    Person.prototype.greeting = function (){
        console.log(`Greetings ${this.name} :D`);
    }
    function Employee(name, age, role){
        Person.call(this, name, age);
        this.role = role
    }
    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    const bill = new Employee("Nielsen", 25, "Developer")

    bill.greeting();
*/


// class Method - classes are not hoisted...you can not invoke a class before defining it.
// const Person = class {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const bob = new Person("Moses", 24)
// console.log(bob.name);
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // no need to add the method to the prototype, classes automatically do that
    greetings() {
        console.log(`Hello ${this.name}`);
    }
}
// reassigning a method or changing a method

Person.prototype.greetings = function (){
    console.log("I am changed"); 
}
const bob = new Person("Moses", 24)
console.log(bob.name);
bob.greetings();

// Class Inheritance
class Employee extends Person{
    constructor(name,age, position){
        super(name, age);
        this.position = position;
    }
}
const barb = new Employee("Barb", 25, "developer");

console.log(barb);
barb.greetings();