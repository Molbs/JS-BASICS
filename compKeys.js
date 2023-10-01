//Computed Keys
// Allows use of [] which will evaluate(compute) as the property name
// const myId = 15;
// const myObj = {
//     [myId]: '102'
// }
// console.log(myObj);  /* { '15': '102' } */

let myId = 0;
const idParams = 'userId'
const myObj = {
    [idParams +' ' + ++myId]: '102',
    [idParams +' ' + ++myId]: '106',
    ['para'+'meter']: false
}
// console.log(myObj); /* { 'userId 1': '102', 'userId 2': '106', parameter: false } */

function capitalizer(word){
    const a = word.charAt(0).toUpperCase();
    const b = word.slice(1).toLowerCase();
    return a+b
}
const myObj1 ={
    [capitalizer('hello')]: "world",
    [capitalizer('NAME')]: 'Nielsen'
}
// console.log(myObj1); /* { Hello: 'world', Name: 'Nielsen' } */

// data format...
function objectBuilder(x,y,z, numTimes){
    let obj = [];
    for (let i=0 ;i<numTimes; i++){
       const newObj = {
          x: i + 1,
          y,
          z
       }
       obj.push(newObj)
 }
 return obj
 }
 const bob = objectBuilder(3,5,6, 5);

function dataFormat(arr){
    return arr.map( n =>{
        return {
            ['userId' + n.x]: n
        }
    })
    
}
// console.log(dataFormat(bob));  /* [{ userId1: { x: 1, y: 5, z: 6 } },{ userId2: { x: 2, y: 5, z: 6 } },{ userId3: { x: 3, y: 5, z: 6 } },{ userId4: { x: 4, y: 5, z: 6 } },{ userId5: { x: 5, y: 5, z: 6 } }] */

function dataFormats(arr){
    const formatObj = {};
    for (const item of arr ){
        formatObj['userId' +' ' + item.x] = item
    }
    return formatObj;
}
// console.log(dataFormats(bob));  /* {'userId 1': { x: 1, y: 5, z: 6 },'userId 2': { x: 2, y: 5, z: 6 },'userId 3': { x: 3, y: 5, z: 6 },'userId 4': { x: 4, y: 5, z: 6 },'userId 5': { x: 5, y: 5, z: 6 }} */