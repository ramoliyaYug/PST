/*
-> declariion of variables
-  use var, let, const
-  we can asign variables in one line itself 
what is syntax:
it is the way of writing instruction in a perticular programming langauge that follows somme set of rules
*/
let a = 3;
let b = 9;
let c = 6;

console.log(a);
console.log(b);
console.log(c);
console.log(a+b+c);

//update of variable
a = 5;

console.log(a);

//constant

const PI = 3.14159;
console.log(PI);

// const PI = 3.14159; //error: Identifier 'PI' has already been declared
// PI = 3.14159; //error: Assignment to constant variable.
// console.log(PI) // this is showing error
// so constant can't be reassigned & redeclared
// url must be stored in the const 

//this is single line comments

/*
this is multi line comments
*/

/*
-> data types
N - Number -> Represents all types of numbers (integers, floats, etc.).
N - Null -> Represents an intentional absence of any object or value, indicating that a particular memory box is empty.
B - Boolean -> Represents logical values: true or false.
B - BigInt -> Represents integers larger than Number.MAX_SAFE_INTEGER. It allows for arbitrary precision in numeric operations.
S - String -> Represents a sequence of characters enclosed in " ", ' ', or ` ` (template literals).
S - Symbol -> Represents a unique and immutable value, often used as a key for object properties.
U - Undefined -> Represents a variable that has been declared but not yet assigned a value.

data type represent differrent types of values which we can use in js to sotr data

1. number :
- this is only type to handle all kind of numerical values, which can handle integer and float.

2. infinity:
- infinity is the special type of data type signify very large amount of number 
*/
let f = 23/0;
console.log(f); //infinity
/*
3. exponantial:
- this is use to show very large or very small numbers with the use of notation of "e"

4. strings:
- string is a sequence of characters enclosed in single quotes or double quotes or backticks also.
- you can create empty string using single quote and double quote. and by doing console log the output will be empty string

5. boolean:
- boolean is a data type that can only have two values: true or false.
- everything with the value is true
- console.log(Boolean(value)); //true
- everything without value is false
- console.log(Boolean(""/0/NaN/undefined/null)); //false
- there is a boolean() function in js which convert the each other value. true->false & false->true
*/
let result;
result = Boolean(0);
console.log(result); // false
result = Boolean(1); 
console.log(result); // true
/*
6. null:
- null is a data type that represents no value or nothing.

7. undefined:
- undefined is a data type that represents a variable that has not been assigned a value.
- when variable is not asignd or declered and not initialized with any value so by default the value will be store in undefined.

8. NaN (not a number):
- NaN is a special value in JavaScript that represents an invalid number.
*/

/*
-> operators:

- operator is a special character used to perform an operation on variables or values.

- operators are divided into two categories:

1. arithmetic operators: +, -, *, /, %, **
2. assignment operators: =, +=, -=, ++, --, *=, /=, **=, %=
3. comparison operators: ==, !=, ===, !==, >, <, >=, <=
4. logical operators: &&, ||,!, &amp;&amp;
5. bitwise operators: &, |, ^, ~, <<, >>, &amp;&amp;&amp;

operators are also used to create expressions, which are sequences of operators and operands.
- if we perform operation to numbers which is written in the formate of string the string will be converted into numbers converts.
- and if we try to perform and operation on string of word then it will show NaN.
*/
let num1 = "2"
let num2 = "4"
console.log(num1 - num2); // it will only work for -, *, / not for + in this case it will simply add the strings as it is, basically concatinationn

//question
// create a seperate variables which use to store the data of fullname, age, ispresent, score,city
let studentName = "Yug Ramoliya";
let age = 17;
let IsPresent = true;
let score = 69;
let city = "Rajkot"

console.log("Name: " + studentName);
console.log("Age: " + age);
console.log("Is Present: " + IsPresent);
console.log("Score: " + score);
console.log("City: " + city);

//concatination
// in js execution always start rom left to right
let x = 5;
let y = 6;
let z = "apple";

console.log(x+y+z); // reading start ferom left to right

console.log("20" + 4); // it shows 204 and it is string, this plus sign will be used in concationation here
console.log("20" - 4); // here the string will be converted to numbers, output 16
console.log("yug" -  4); //NaN
console.log(true + 4); // output 5 true=1
console.log(false + 4); //output 4 false=0

//# sabse bada doubt
/*
bina bakchodi wala null and undefined mai difference

null wo hota hai jisme hum variable declare karke bata te hai ki kuch nai hai so agar koi puche ki whatt does null represeent so uska jawab hoga  It's an intentional absence of any value. You manually assign it to indicate "no value."

and undefined mai ye hota hai ki hum kuch karte hi nai aur agar koi undefined ke bare mai puch le to uska jawab hoga It means a variable has been declared but hasn't been assigned a value yet, or a function has no return value.

mota mota return value ka difference hai
*/