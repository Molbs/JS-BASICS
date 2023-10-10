// Map Object
/*
- used for simple key/value pairs
- Any value can be used for either a key or value(i.e object, string, function)
- reason for using map over objects:
 * Object prototype has default key that might conflict with own keys 
 * Keys of map can be anything whereas with objects, have to be string or symbol
 * can easily get the size of map
 */
const myMap =  new Map();
const firstKey = 'Key3';
const firstValue = 'Val1'
const secondKey = {}
myMap.set(secondKey, 'secondKey')
myMap.set('key', 'value');
myMap.set('anotherKey', 'value');
myMap.set(firstKey, firstValue);
myMap.delete(firstKey);
// console.log("map Size: " + myMap.size + "\nmap content: " + JSON.stringify([...myMap]));
/*
map Size: 3
map content: [["key","value"],["anotherKey","value"],["Key3","Val1"]]
 */
// console.log("map Size: ",myMap.size,"\nmap content:", myMap);
 /*
 map Size:  3 
map content: Map(3) { 'key' => 'value', 'anotherKey' => 'value', 'Key3' => 'Val1' }
*/
// console.log(myMap.get(firstKey)); 
// console.log(myMap.has(firstKey)); /*true */
// myMap.clear();
// console.log(myMap); /*Map(0) {} */
// myMap.forEach((val) =>console.log(val));
// iterating - Keys, Values, entries
// console.log(myMap.keys()); /* [Map Iterator] { {}, 'key', 'anotherKey', 'Key3' } */
//  for (const [key, value] of myMap.entries()){
//     console.log(`${key} => ${value}`);
//  } 
 /**
[object Object] => secondKey
key => value
anotherKey => value
Key3 => Val1
*/
// for (const val of myMap.values()){
//     console.log(val);
// }
/**
 *secondKey
value
value
Val1
 */

const myMapData = [['KeyA','value one'],['KeyB', 'Value two']];
const anotherMap = new Map(myMapData);
// console.log(anotherMap); /* Map(2) { 'KeyA' => 'value one', 'KeyB' => 'Value two' } */
const anotherMap1 = new Map([
    ['a', 'b'], 
    ['c', 'd'], 
    ['e', 'f']]);
    // console.log(anotherMap1); /*Map(3) { 'a' => 'b', 'c' => 'd', 'e' => 'f' } */

// set Object
/**
 * Allows you to store unique values of any type
 * Each element is unique
 */
const myObj = {A:1, B: 2}
let mySet= new Set(['one','two']);
mySet.add('bob')
mySet.add('John')
mySet.add(myObj)
// console.log(mySet); /* Set(5) { 'one', 'two', 'bob', 'John', { A: 1, B: 2 } } */

mySet.forEach((s) => {
    if(typeof s === 'object'){
        // console.log('object found!');
    }
    else{
        // console.log(s);
    }
});
for (const val of mySet.keys()){
    // console.log('keys', val);
}
for (const [key, value] of mySet.entries()){
    // console.log('entries', {key}, '=>', {value});
}
for (const val of mySet.values()){
    // console.log('values', val);
}
// convert sets to arrays and vice versa
const arrFromSet = Array.from(mySet)
arrFromSet.push('bob')
// console.log(arrFromSet); /*[ 'one', 'two', 'bob', 'John', { A: 1, B: 2 } */
const setFromArray = new Set(arrFromSet); /*[ 'one', 'two', 'bob', 'John', { A: 1, B: 2 }, 'bob' ] */
// console.log(setFromArray); /*Set(5) { 'one', 'two', 'bob', 'John', { A: 1, B: 2 } } */
const anotherArrFromSet = [...setFromArray]
// console.log(anotherArrFromSet); /*[ 'one', 'two', 'bob', 'John', { A: 1, B: 2 } ] */



