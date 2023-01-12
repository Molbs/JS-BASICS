// let name = 'Moses';
// declaring an object
let person = {
    name:'Nielsen',
    age:23,
    spouse:'Maria',
    address:{
        city:'Nairobi',
        po_Box: '3764_citySquare',
        postal_code: 00200
    }
}
console.log(person);
// dot notation
person.name = 'Moses';
console.log(person.name);
// bracket notation
person['age'] = 25;
console.log(person.age);
