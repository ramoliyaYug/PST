// string

let str = "Hello, World!";
let strObj = new String("Hello, World!");

console.log(typeof (str)); // string
console.log(typeof (strObj)); // object

/*
-string primitive is the basic way to represent a string it is immutable.
-stored as a sequence of 16-bit unicode characters

-string object is created using the 'new' keyword. it has additional properties and methods.

-boxing:
 -when a method on strin primitive are called, js automatically boxes the string primitive into a string object temporarily, allowing the method to be called.after the method is executed, the result is converted back into a string primitive.
*/

let greeting = "hello"
greeting[0] = "j";

console.log(greeting); // hello // string is immutable

//immutability makes the string operation safer and more pridictible. especially when dealing with multi threaded environments or complex programs.

//string equality check

let str1 = "hello";
let str2 = "hello";

console.log(str1 === str2); // true

let str3 = new String("hello");

console.log(str1 === str3); // false // they are different objects, not same

/*
difference between string primitive and string object
-difference is in creation, type, memory, mutabitity, method invocation, usage
*/

/*
string methods :
-length
-charAt(index)
-substring(start, end)
-indexOf, includes()
-toUpperCase(), toLowerCase()
*/

