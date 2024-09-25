/*
CRUD IN JS:
C -  using push and unshift

R -
1. iterate : for of and other loop
2. by index : at, []
3. check availibility : includes, indexOf

U -
1. splice, push, unshift
2. sort, reverse

D - splice, pop, shift

other operation : toReversed, toSpliced, slice
*/

/*
splice: 
remove element: splice(startIndex, No. of Elements to be deleted, elements to be added)
*/

let fruits = ["apple", "mango","orange"];

// removing mango
fruits.splice(1,1);
console.log(fruits); // output: ["apple", "orange"]

//adding values

fruits.splice(1,0,"pineapple","banana");
console.log(fruits); // output: ["apple", "pineapple", "banana", "orange"]


//toSpliced: after changes it creates a new array and rest is similar to the splice

let arr1 = ["a","c","d"];
let newarr1 = arr1.toSpliced(1,0,"b");

console.log(arr1); // output: ["a", "b", "d"]

console.log(newarr1); // output: ["a", "b", "c", "d"]


/*
sort: to arrange array in accending and decending order 
default -> accending order
*/

let arr2 = [5,2,8,1,3];
arr2.sort();
console.log(arr2); // output: [1, 2, 3, 5, 8]

//decending order:

arr2.sort((a,b)=>b-a);
console.log(arr2); // output: [8, 5, 3, 2, 1]

/*
reverse : it reverse order of elements
*/

let arr3 = [5,2,8,1,3];
arr3.reverse();
console.log(arr3); // output: [3, 1, 8, 2, 5]

/*
toReversed: after changes it creates a new array and rest is similar to the reversed
*/

let arr4 = [5,2,8,1,3];
let newarr4 = arr4.toReversed();

console.log(arr4); // output: [5, 2, 8, 1, 3]
console.log(newarr4); // output: [3, 1, 8, 2, 5]

/*
slice: it return a sub array in perticular range and it doesn't modify the original array
*/

let arr5 = [5,2,8,1,3];
let subarr = arr5.slice(1,3);
console.log(subarr); // output: [2, 8]

/*
join: it converts the array in the string
*/

let arr6 = [1,2,3,4,5,6,7,8];

let str = arr6.join("* ");

console.log(str); 

/*
getter and setter in js:

*/

let person = {
    fName: "yugiii",
    lName: "ramoliya",
    get fullName(){
        return this.fName + " " + this.lName;
    }
}

console.log(person.fullName); // output: yugiii ramoliya

let person2 = {
    fName: "yugiii",
    lName: "ramoliya",
    set updateName(last){
        this.lName = last;
    },
    get fullname(){
        return this.fName + " " + this.lName;
    }
}

person2.updateName = "jiii";
console.log(person2.fullname); // output: yugiii jiii

/*
functions are first class citizens in javascript:
- they can be assigned to variables
- they can be passed as arguments to other functions
- they can be returned from other functions
- they can be used as objects also
*/