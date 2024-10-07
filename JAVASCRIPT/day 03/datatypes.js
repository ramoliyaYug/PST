//buddy for study
/*
data type has two types
1. primitive data types
2. non-primitive data types

1. primitive data types
 - number 
 - bigint
 - string 
 - boolean
 - undefined
 - null
 - symbol

2. non-primitive data types
 - object
 - function
 - array
 - date
*/

//typeof function

let a = typeof "yug";
let b = typeof x;
let c = typeof true;
let d = typeof 53;

console.log(a); // string

console.log(b); // undefined

console.log(c); // boolean

console.log(d); // number

//classs question 1 - reprinting the variables with new value
let age = 17;
console.log(age); // returns 17
// re assigning a variable
age = 18;
console.log(age); // now it returns 18
// so basiclly it is printing old and new values

//class question 2 - checking data types
let aNumber = 17;
let aString = "ramoliya"
let aBoolean = false
let anUndefinedVariable;

console.log(typeof (aNumber)); // number

console.log(typeof (aString)); // string

console.log(typeof (aBoolean)); // boolean

console.log(typeof (anUndefinedVariable)); // undefined

//exception
 let num = null;
 console.log(typeof num); // object

//class question 3

let p = 10;
let y = 20;
console.log(p + y); 
console.log(p - y); 
console.log(p * y); 
console.log(p / y); 

//class question 4:
let carModel = "toyota corolla";
let year = 2006;
let isElecric = true;

console.log(carModel); // toyota corolla

console.log(year); // 2006

console.log(isElecric); // true

//class question 5:

let e = 10;
let f = 20;
let g;
e=g;

console.log(e);
console.log(f);
console.log(g);
