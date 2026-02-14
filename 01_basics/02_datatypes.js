"use strict"; // treat all JS code as newer version of JS code

//alert("hello") // we are using nodejs terminal... this instruction runs only on browser, not in terminal

// variable datatypes...
let accId = 12345 
console.log(typeof accId);

let accCity = "Pune"
console.log(typeof accCity)

let accBool = true
console.log(typeof accBool)

let accUndef = undefined
console.log(typeof accUndef);

console.table([typeof accId,typeof accCity,typeof accBool,typeof accUndef])

//constant datatypes... just start with const
const accId2 = 12345 
console.log(typeof accId);

const accCity2 = "Pune"
console.log(typeof accCity)

const accBool2 = true
console.log(typeof accBool)

const accUndef2 = undefined
console.log(typeof accUndef);

console.table([typeof accId2,typeof accCity2,typeof accBool2,typeof accUndef2])


console.log("Type of 'Dhairya' : ",typeof "Dhairya");

console.log(typeof null)
