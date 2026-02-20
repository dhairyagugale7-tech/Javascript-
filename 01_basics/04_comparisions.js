console.log(2 > 3);

console.log("2" > 1);   //unpredictable result... converts the string into number on its own...

// we should first check if they are same datatypes or not... its the correct way to of comparing values...

console.log("Dhairya" < "Manoj");   
console.log("Manoj" > "Dhairya");

//"==" and "<=", ">=" works differently in jS we'll see further
// === : strict check, it checks the memory reference.... IMP

console.log("2" === 2);
console.log("2" == 2);