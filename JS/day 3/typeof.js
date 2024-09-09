console.log(typeof(NaN)); //number
console.log(typeof(25 - "5" +"6")); //string
console.log(typeof("NaN" + 5 - 6)); //number
console.log(typeof(Symbol("HELLO"))); //symbol
console.log(typeof(125n)); //bigint //if we want to use bigint then write "n" at the end
console.log(typeof(125-6+55+NaN-"hello")); //number
console.log(typeof(null)); //object
console.log(typeof("25"-5)); //number
console.log("125" - 6 + "NaN"); //119NaN
console.log("25m" - 5); //NaN //string cannot convert to bigint 

// code execution is done left to right

// NaN -> something we can not represent 

console.log(typeof([])); //object
console.log({}+[]); //[object Object]
//when you use + with object it converts to string 

console.log(typeof([1,2,3,4,])); //object

console.log(typeof({"name" :  "yug"})); //object
