// number = prompt('Enter a number:');
// converting text to integer
// total = parseInt(number) + 12;
// console.log(total);
console.log(isNaN('hello'));
console.log(isNaN('45'));
console.log('Nielsen'.length);
console.log('ABCD'.toLowerCase());
console.log('i want want to be uppercase!!!'.toUpperCase());
console.log('New tech'.charAt(2));
console.log('my'+' '+'Name'+' '+'is'+" "+'Nielsen');
//  Boolean 
let approved = true;
let check = null;
if (check ==true){
    console.log('Your loan application has been approved')
}
else{
    console.log('Loan application declined!')
}
let content = 'has content';
let noContent ='';
let noAssignedVariable;
let isFalse = false;
let isNotANumber = isNaN;
// console.log(Boolean(content));
// console.log(Boolean(noContent));
if (isNotANumber){
    console.log('has True Values');
}
else{
    console.log('has false values');
}
if (noContent){
    console.log('has True Values');
}
else{
    console.log('has false values');
}
if (noAssignedVariable){
    console.log('has True Values');
}
else{
    console.log('has false values');
}
if (isFalse){
    console.log('has True Values');
}
else{
    console.log('has false values');
}
// let person = {
//     name: 'Nielsen',
//     age:23,
//     height:`5' 6"`,
//     male: true,
// };
// console.log(person.height);
let myPerson = new Object();
myPerson ['name']= 'Moses';
myPerson ['age']= 24;
console.log(myPerson);
// Constructor pattern for creating objects
function PersonConstructor(name,age,height,male){
    this.name=name;
    this.age=age;
    this.height=height;
    this.male=male;
    this.showMessage = function(){
        console.log(`Hello ${this.name}`);

    };
};
let profile = new PersonConstructor('Nielsen',24,`5' 6"`,true);
console.log(profile);
profile.showMessage();
let person = new PersonConstructor('Maria', 20, `5' 5"`,false);
// arrays
let clubs = ['Man United', 'Arsenal', 'Man city'];
console.log(clubs.length);
let arrange = clubs.sort()
console.log(arrange);
let revert = clubs.reverse();
console.log(revert);
// adding objects inside an array.
let couple = [person,profile];
console.log(couple[0]);
let single = couple[0];
// accessing a function inside an object created in the array.
single.showMessage();
let coupleLength = couple.length;
console.log(coupleLength);
let clubsLength = clubs.length;
let clubsSliced = clubs.slice(clubsLength-1);
console.log(clubsSliced);
console.log(clubsLength);
console.log(clubs);
