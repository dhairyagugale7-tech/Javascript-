const accId = 144553
let accEmail = "dhairyagugale7@gmail.com"       //most prefered in modern js
var accPass = "12345"       //Should not use "var" keyword for variable declaration
accCity = "Pune"        //can make a vaariable with no keyword but not prefered... its not good !
let accState;

// accId = 234653 //not allowed... gives TypeError because we cannot change constant variables...

console.table([accId, accEmail, accPass, accCity, accState])

accEmail = "dhairyakada@gmail.com"
accPass = "56789"
accCity = "Jodhpur"

console.table([accId, accEmail, accPass, accCity, accState])

//"let" and "var" are the keywords used for variable declaration... but there is scope problem in "var" variable... so it is mostly suggested that we should use "let" insted of "var"

