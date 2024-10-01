//find the maximum value from array using reduce method:

let arr = [10, 36, 18, 23];

let max = arr.reduce((a, b) => {
    return (a > b) ? a : b;
});

console.log("Maximum value in the array: ", max);

//remove duplicates from array using map method:

let arr2 = [1, 2, 2, 3, 3, 4, 4, 4, 5];

let newArr = [];

arr2.map((value) => {
    if (!newArr.includes(value)) {
        newArr.push(value);
    }
});

console.log("Array after removing duplicates: ", newArr);