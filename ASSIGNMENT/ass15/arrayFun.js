/*
Question 1: Check and Add Element in an Array
Write a JavaScript function that takes an array and an element as parameters and adds the element to the beginning of the array if element was not already available in the array. If the element was already present in the array, then don?t add it and instead return this message - ?element is already available in the given array?.
*/

function checkAddElements(arr,elem){
    if(arr.includes(elem)){
        return `${elem} is already available in the given array.`;
    }else {
        arr.unshift(elem);
        return arr;
    }
}

console.log(checkAddElements([1,2,3,4], 6))
console.log(checkAddElements([1,2,3,4,5], 1))

/*
Question 2: Combining Arrays
Create a function that combines two arrays of strings into a single array using the `concat` method. The function should return the merged array. Then print all the elements which have length 5.
*/

function concArr(arr1,arr2){
    return arr1.concat(arr2);
}

console.log(concArr(["hello", "ji", "javascript"], ["I", "am", "amazing"]));

/*
Question 3: Slicing and Splicing
Create a function that takes an array and performs the following actions:
Use the `slice` method to extract a portion of the array.
Use the `splice` method to insert elements into the array.
Return the modified array.
*/

function arrMethod(arr3) {
    let sliceArr = arr3.slice(2, 5);
    sliceArr.splice(1, 0, "hello");  
    return sliceArr;
}

console.log(arrMethod([1, 2, 3, 4, 5, 6, 7]));  // Output: [3, "hello", 4, 5]

/*
Question 4: Spread Operator:
Create an array of names, and then using the spread operator, create a new array that includes the original names along with three additional names of your choice.Then write a JavaScript function that uses a loop to iterate through the array and prints each name to the console with a greeting message.
*/

const originalNames = ["Alice", "Bob", "Charlie"];

const additionalNames = ["David", "Eve", "Frank"];

const combinedNames = [...originalNames, ...additionalNames];

function printNamesWithGreetings(names) {
    for (let name of names) {
        console.log(`Hello, ${name}!`);
    }
}

printNamesWithGreetings(combinedNames);

/*
Question 5:Joining Arrays:
You have two arrays: one containing first names and the other containing last names. Write a function that combines these two arrays into a new array of full names and separates them with a space.
*/

const firstNames = ["John", "Alice"];
const lastNames = ["Doe", "Smith"];

function combineNames(firstNameArr, lastNameArr) {
    const fullNames = [];

    for (let i = 0; i < firstNameArr.length; i++) {
        fullNames.push(`${firstNameArr[i]} ${lastNameArr[i]}`);
    }

    return fullNames.join(", ");
}

const fullName = combineNames(firstNames, lastNames);
console.log(fullName);

/*
Question 6: Sorting an Array:
Create an array of random numbers. Write a function that sorts this array in ascending order
*/

const numbers = [7,2,9,1,4,6];

function sortAscending(arr4){
    return arr4.sort();
}

const sortedNumbers = sortAscending(numbers);
console.log(sortedNumbers);