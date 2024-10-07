/*
Question 1: Filter even numbers
Given an array of numbers: [2, 4, 6, 8, 10], use the ?filter? function to create a new array called ?evenNumbers? that contains only even numbers from the original array.
*/

let numbers = [2,4,6,8,10];
let evenNumbers = numbers.filter((num)=>num%2==0);

console.log(evenNumbers);

/*
Question 2: Mapping Grades
You are given an array of student objects with the following structure:

[
{ name: "Alice", score: 88 },
{ name: "Bob", score: 92 },
{ name: "Charlie", score: 75 },
{ name: "David", score: 64 }
]

Create a JavaScript function that uses the ?map? function to transform this array into an array of objects with a "grade" property. The "grade" should be a string based on the following criteria:
A score of 90 or above is an "A".
A score between 80 and 89 (inclusive) is a "B".
A score between 70 and 79 (inclusive) is a "C".
A score below 70 is a "D".
Return the array of objects with grades.
*/

let students = [
  { name: "Alice", score: 88 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 75 },
  { name: "David", score: 64 }
];

let grades = students.map((student) => {
    let grades;
    if(student.score >= 90) {
        grades = "A";
    }else if(student.score>=80 && student.score<=89){
        grades = "B";
    }else if(student.score>=70 && student.score<=79){
        grades = "C";
    }else if(student.score<70){
        grades = "D";
    }
    return {
        name: student.name,
        grade: grades
    };
});

console.log(grades);

/*
Question 3: Reducing Inventory Value
You have an array of product objects, where each object has properties ?name? (string) and ?price? (number). Design a JavaScript function that uses the ?reduce? function to calculate and return the total value of the entire inventory (the sum of the prices of all products).

[
{ name: "Laptop", price: 800 },
{ name: "Phone", price: 600 },
{ name: "Tablet", price: 300 }
]
*/

let inventory = [
  { name: "Laptop", price: 800 },      
  { name: "Phone", price: 600 },      
  { name: "Tablet", price: 300 }      
];

let totalInventoryValue = inventory.reduce((total, product) => total + product.price, 0);

console.log(totalInventoryValue);

/*
4.Testing Array Elements with every and some Functions:
Given an array of ages, write two separate functions using the `every` and `some` array methods. One function should check if all ages in the array are above 18, and the other should check if at least one age in the array is above 18. Provide examples and explanations for each function.
*/

const ages = [25,30,17,21,19];

function allAgesAbove18(ageArr) {
    return ageArr.every((age) => age > 18);
}


function isAtLeastOneAgeAbove18(ageArr){
    return ageArr.some((age) => age > 18);
}

console.log(allAgesAbove18(ages)); // Output: false
console.log(isAtLeastOneAgeAbove18(ages)); // Output: true
