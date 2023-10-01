// Spread syntax
//  can be used in places where e.g. functions expect multiple arguments, multiple elements or multiple variables
 function spreadOperator(...args){
    console.log(args);
 };

 spreadOperator({name: 'Moses', age: 25, nationality: 'kenya'}, 12, "profile");

 const myArray = [0, 1, 2, 3,4];
 console.log(...myArray);
 const secondArray = [5,6,7,8,9]
//  secondArray.push(myArray)
//  console.log(secondArray); /* add the array in the array [ 5, 6, 7, 8, 9, [ 0, 1, 2, 3, 4 ] ] */
//  secondArray.push(...myArray)
//  console.log(secondArray);  /* adds the spread array in the array [ 5, 6, 7, 8, 9, [ 0, 1, 2, 3, 4 ], 0, 1, 2, 3, 4 ]*/
 const myThirdArray = [...myArray, ...secondArray]
 console.log(myThirdArray); /* */
 function sayHello(x,y,z){
    console.log(`Hello There ${x}, ${y}, and ${z}`);
 }
//  sayHello("moses",...["kamau","moringa"]); /*Hello There moses, kamau, and moringa */
const names = ['Moses', 'Maria', 'Nats']
sayHello.apply(null,names) /* Hello There Moses, Maria, and Nats */ /*Old way*/

sayHello(...names) /* Hello There Moses, Maria, and Nats */ /*Spread syntax*/

const fifthArray = myArray.push.apply(myArray,secondArray);
console.log('fifth Array: ', fifthArray );/* 10 */
// myArray.push.apply(myArray,secondArray); or myArray.push(...secondArray)
console.log(myArray); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9]

const male = ['Moses'];
const surname = ['Alukwe', 'Nielsen'];
const lady = ['Mary', 'Oramisi'];

const family = male.concat(lady, surname);
const fam = [...male, ...surname, ...lady];
male.push.apply(male, lady)
console.log('Family: ',...family);
console.log('Fam: ',...fam);
console.log(male);
const spares = ['valve', 'tube', 'bearing'];
const add = ['block', 'kit']
function partsInserter(arr1, arr2, index){
   const firstPart = arr1.slice(0,index);
   const secondPart = arr1.slice(index);
   const part = firstPart.concat(arr2,secondPart)
    return part;
}
console.log(partsInserter(spares,add,2));

spares.splice(2,0,...add);
console.log(spares);

//  copy an array
const anotherArray = [ 10, 9, 8, 5];
const copy = [...anotherArray.splice(0,anotherArray.length-1)];
console.log(copy);
console.log(anotherArray);

// Rest 
// used to collect multiple arguments or elements into a single array or object.
function sum(...numbers) {
   let result = 0;
   for (let num of numbers) {
     result += num;
   }
   return result;
 }
 
 console.log(sum(1, 2, 3, 4)); // Output: 10
 
function names1 (...name){
   return name;
}
const nameArray = (names1('Moses', 'Mary', 'John', 'Peter'));
const lowerArray = nameArray.map(item => item.toLowerCase());
console.log(lowerArray);

if (lowerArray.includes('moses')){
   console.log('Found!');
}
else{
   console.log('Not Found :(');
}

nameArray.forEach((item, index, array) => {
   array[index] = item.toUpperCase();
})
console.log(nameArray);
// method definition 
// pre- ES6, in object literals, methods, are defined as function expressions
/* e.g. const myObj{
   id: 1
   sayHi: function(){
      console.log('Hi');
   }
} */
//  ES6 has method definition for creating methods
/*e.g
const myES6Obj {
   id: 11,
   sayHi(){
      console.log(`Hello`);
   },
      sayBye(){
      console.log(`Bye now`);
   }
}
*/

const myObj = {
   greet(arg){
      console.log(`Hello ${arg}`);
   },
   anotherMethod(...args){
      this.greet(args[0])
      console.log(`I have ${args.length} arguments`);
      console.log(args);
   }
}
myObj.anotherMethod("Nielsen", 1, true, false, [23,45,24,])
// Object property shorthand
const a = 10;
const b = 20;
const c = 30;

const d = {
   a: a,
   b: b,
   c: c
}

const e = {
   a,
   b,
   c
}

const {c:anotherC} = e
console.log(anotherC);

function objectBuilder(x,y,z, numTimes){
   let obj = [];
   for (let i=0 ;i<numTimes; i++){
      const newObj = {
         x,
         y,
         z
      }
      obj.push(newObj)
}
return obj
}

console.log(objectBuilder(3,5,6, 5));