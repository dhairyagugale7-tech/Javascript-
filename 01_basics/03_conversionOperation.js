let score = 7 
let score2 = Number(score)

console.log(score)
console.log(typeof(score))

console.log(score2);
console.log(typeof(score2));

//Number : 
//some conversions are as following :
//we get these when we do 'console.log(value2)' if 'value' has following values

//33 => 33
//"33" => 33
//"33abc" => NaN(Not a Number)
//true => 1
//false => 0
//null => 0

console.log("*******************************")

let logged = undefined
let logged2 = Boolean(logged)


console.log(logged)
console.log(logged2)

console.log(typeof(logged)) //object
console.log(typeof(logged2))

//Boolean : 
//1 => true
//0 => false
//7 => true
//-7 => true
//"ajdf" => true
//"" => false
//null => false
//undefined = false

console.log("*******************************")

let num = 32
let str = String(num)

console.log(num)
console.log(str)

console.log(typeof(num))
console.log(typeof(str))

//String : 
//1 => string madhla 1
//null => string me null
//undefined => string me undefined