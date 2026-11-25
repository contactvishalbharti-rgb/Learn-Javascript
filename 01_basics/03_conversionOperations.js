let variable1 = "33abc"
let variable2 = null
let variable3 = undefined

console.log(variable1);// 33abc
console.log(typeof(variable1)); //string

console.log(variable2); //null
console.log(typeof(variable2));// object

console.log(variable3);//undefined
console.log(typeof(variable3));//undefined

let numberinValue1= Number(variable1)
console.log(numberinValue1);//nan
console.log(typeof(numberinValue1));// number

let numberinValue2= Number(variable2)
console.log(numberinValue2);// 0
console.log(typeof(numberinValue2));// number

let numberinValue3= Number(variable3)
console.log(numberinValue3);// nan
console.log(typeof(numberinValue3));// number

console.log(typeof(""));
console.log("");//invisible space taken

let anyString= ""
let anyString2="vishal"
let anyNumber=0;
let anyNumber2= 22;
let anyNumber3= 1;

let booleanIsanyString= Boolean(anyString)
console.log(booleanIsanyString);// false

let booleanIsanyString2= Boolean(anyString2)
console.log(booleanIsanyString2);//true

let booleanIsanyNumber= Boolean(anyNumber)
console.log(booleanIsanyNumber);// false

let booleanIsanyNumber2= Boolean(anyNumber2)
console.log(booleanIsanyNumber2);//

let booleanIsanyNumber3 = Boolean(anyNumber3)
console.log(booleanIsanyNumber3); // true
