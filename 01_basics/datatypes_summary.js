
//VIMP : 
// For primitives → === compares values
// For objects → === compares references


// primitive datatypes : only data is compared, not the reference, if data is same the datatypes are same, eg : string, number, boolean, null, undefined, bigint

let name = "Dhairya"
let id = 7
let loggedIn = false
let temp = null
let email; //here datatype is undefined
let mainid = Symbol(123)    //symbol datatype
let num = 56498712138944664465515111n

console.table([typeof name, typeof id, typeof loggedIn, typeof temp, typeof email, typeof mainid, typeof num])

let name2 = name
let id2 = id 
let loggedIn2 = loggedIn
let temp2 = temp 
let email2 = email 
let mainid2 = mainid
let num2 = num

console.table([name2 === name, id2 === id, loggedIn2 === loggedIn, temp2 === temp, email2 === email, mainid2 === mainid, num2 === num])

let name3 = "Dhairya"
let id3 = 7
let loggedIn3 = false
let temp3 = null
let email3; //here datatype is undefined
let mainid3 = Symbol(123)   //symbol datatype
let num3 = 56498712138944664465515111n

console.table([name3 === name, id3 === id, loggedIn3 === loggedIn, temp3 === temp, email3 === email, mainid3 === mainid, num3 === num])

// non-primitive : even if the data  is same but if reference are different then two datatypes will be different, eg : array, object, functions

let players = ["MSD", "Virat", "Rohit"]
let players2 = players;
let players3 = ["MSD", "Virat", "Rohit"]

let palyerObj = {"MSD" : 7, "Virat" : 18, "Rohit" : 45}
let playerObj2 = palyerObj
let playerObj3 = {"MSD" : 7, "Virat" : 18, "Rohit" : 45}

let funcObj = function(){
    console.log("Hello")
}
let funcObj2 = funcObj
let funcObj3 = function(){
    console.log("Hello")
}

console.table([players2 === players, playerObj2 === palyerObj, funcObj2 === funcObj])   //2nd and 1st have same refereces so this table is tautology(all true)
console.table([players3 === players, playerObj3 === playerObj3 === palyerObj, funcObj3 === funcObj])//3rd and 1st don't have same refereces so this table is contradiction(all false)

//if we change any data in 2nd obj, it will be reflected in 1st as well but if do any change in 3rd it will not be reflected in 1st
