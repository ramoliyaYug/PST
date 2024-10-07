//object operation or method:

//1. Object.keys -> return the array of all the keys

let person1 = {
    name: "yug",
    age: 17,
    rollNo: 81
};

console.log(Object.keys(person1)); //output: ['name', 'age', 'rollNo']

let arr1 = Object.keys(person1);

//using for of loop
for(let i of arr1){
    console.log(person1[i])
}

// using normal for loop
for(let i = 0; i < arr1.length; i++){
    console.log(person1[arr1[i]]);
}

//2.Object.values -> return the array of all the values

 console.log(Object.values(person1)); //output: ['yug', 17, 81]

//3. Object.entries -> return the array of all the key-value pairs

console.log(Object.entries(person1)); //output: [['name', 'yug'], ['age', 17], ['rollNo', 81]]
let arr2 = Object.entries(person1)
for(let i = 0; i< arr2.length ; i++){
    console.log(arr2[i][1]);
}

/*
lexical scope:
- the region where it can be exist
- the scope of a variable is the part of the code where it is defined.
concept of clouser:
- it allows to access the variable outside the lexical scope.
*/

//once the function return the value after that function's properties get erased and does not exist anymore.
function test1(){
    let a = 5;
    console.log(a);
    return a;
}
console.log(test1());
// console.log(a)

function test2(){ //parent function
    let b = 10;
    function right(){ //child function
        return b;
    }

    return right; //returned a function defination
}

let check = test2();
console.log(check());

//all child function access the parent function's properties regardless of function returning value.

/*
notes:
1. by default we can not use access variables or properties outside their lexical scope but because of closuer we can access them oustside their lexical scope.

2. when function returns then it destroies all its properties but because of clouser the child function can always access the properties of its parent functionno matter parent function has returned or not.
*/

//example of clouser

function parent(a){
    let b = 10;
    function child(){
        return a+b;
    }
    return child;
}

let childFunc = parent(3);

console.log(childFunc()); //output: 13


//2 child example

function parent2(a){
    let b = 10;
    function child1(){
        return a+b;
    }
    function child2(){
        return a-b;
    }
    return child2;
}

let childFunc1 = parent2(3);
console.log(childFunc1()); //output: 13

/*
type casting :
when you change datatype of a data than it will be called as type casting
*/

let x = "10";
let y = parseInt(x); //parseInt id the method it convert the string to the number but the string should be a valid number
console.log(typeof(y)); //number

let z = 123;
let w = z.toString() // toString is the method which converts the number to string
console.log(typeof(w)); // string

/*
dynamic vs static langauge
1.when we do not need to define the type of data and code that time which is dynamically typed. like js
2.when we need to define the type of data and code that time which is statically typed. like c++, java
*/ 