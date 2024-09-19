/*
values and reference types:
- primitive types (number, string, boolean, symbol, null, undefined) are copied by their value
- object types (arrays, functions, objects) are copied by their reference (address in memory)

- the key difference between the key and reference lies in how they are stored and manipulated in memory

pass by value:
value types stores the actual value in the variable. when you assign the value type to another variable or pass it as an argument to a function. c copy of the variable is created. this means that changes to the new variable won't affect the original value.

pass by reference:
reference types stores to thr actual object types in the variable. when you assign the reference type to another variable or pass it as an argument to a function. you're passing a reference to the same object in memory. this means that changes to the new object won't affect the original.
*/

let a = 10;
let b = a;
b = 20;
console.log(a) // 10
console.log(b) //20

// like this it is apply to string and boolean and function arguments as well.

//pass by reference in array
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); //[1,2,3]
console.log(arr2); //[1,2,3,4]

//pass by reference in objects
let c = {name: 'John'};
let d = c;
d.name = 'Alice';
console.log(c.name) // Alice
console.log(d.name) // Alice
//but with this method the changed value will reflect in the both objects so we can't make a copy of the object using this method

//when you pass a refernce type as an argument to a function, you're passing reference to the original object. any changes made to the object inside the function will also affect the original object outside function.

function modifyArr(arr) {
    arr.push(42);
}
let myarr = [1,2,3];
modifyArr(myarr);
console.log(myarr); // [1,2,3,42]

//cloning of an objects
//method 1 : spread method

let obj1 = {
    name: 'John', 
    age: 25
};
let obj2Clone = {...obj1};
obj2Clone.name = 'Alice';
console.log(obj1.name) // John
console.log(obj2Clone.name) // Alice

//method 2: object.assign()

let obj3 = {
    name: 'John', 
    age: 25
};
let obj4Clone = Object.assign({}, obj3);
obj4Clone.name = 'Alice';
console.log(obj3.name) // John
console.log(obj4Clone.name) // Alice

//method 3: JSON.parse() and JSON.stringify()

let obj5 = {
    name: 'John', 
    age: 25
};
let obj6Clone = JSON.parse(JSON.stringify(obj5));

//shallow copy and deep copy:
//shallow object
const userDetails1 = {
    name: 'John',
    age: 14,
    varified: false,
};

//deep object
const userDetails2 = {
    name: 'John',
    age: 14,
    status:{
        varified: false,
    }
};

/*
shallow copy : copies only the first level of properties. changes in nested object affects both the original and clone.
- spead method and object.assign do this 
*/
let cloneUserDetails2 = {...userDetails2};

cloneUserDetails2.status.varified = true;

console.log(cloneUserDetails2);
console.log(userDetails2);

/*
deep copy: recursively copies all level of nested object to ensure that changes do not affect the original
-JSON.parse() will do this deep copy
*/

let cloneUserDetails3 = JSON.parse(JSON.stringify(userDetails2));
cloneUserDetails3.status.varified = true;
console.log(cloneUserDetails3);
console.log(userDetails2);

/*
rest operators:
the js rest parameter allows a function to accept an identify number of arguments as an array. it is represented by three dots followed by the parameter name and must be the last parameter in the function enabling flexible and dynamic argument handling
*/

//es6 rest parameters
function add(...nums){
    let sum = 0;
    for(let i of nums){
        sum += i;
    }
    return sum;
}

console.log(add(1,2)); // 3
console.log(add(1,2,3)); // 6
console.log(add(1,2,3,4,5)); // 15

//rest with function and other argument

function fun(a,b,...c){
    console.log(`${a} , ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('yug'))
}
fun("yug","om","priyanka","tarman","sristy")

//Math functions
console.log(Math.max(10,20,30));
console.log(Math.min(10,20,30));
console.log(Math.random());
console.log(Math.pow(2,3));
console.log(Math.sqrt(25));
