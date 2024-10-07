/*
string methods:

1. concat:
- it joins two or more strings and returns a new string

2. charCodeAt:
- it returns the Unicode of the character at the specified index
*/
function stringUpperLoweer(str){
    let newStr = "";
for(let i = 0; i < str.length; i++){
    if(i%2 == 0){
        newStr += str.charAt(i).toUpperCase();
    }
    else{
        newStr += str.charAt(i).toLowerCase();
    }
}
return newStr;
}

console.log(stringUpperLoweer("hello world"));

// date methods:

//empting the array
let arr1 = [1,2,3,4,5];
arr1.length = 0;
console.log(arr1); // output: []

let arr2 = [1,2,3,4,5];
arr2.pop();
console.log(arr2); // output: [1, 2, 3, 4]

let arr3 = [1,2,3,4,5];
arr3 = []
console.log(arr3); // output: []

//use case of slice, concat, join, sort 
let arr = [10,1,6,7,3,2];

console.log(arr.slice(2, 4));
console.log(arr.concat(arr3));
console.log(arr.join("*"));
console.log(arr.sort());


