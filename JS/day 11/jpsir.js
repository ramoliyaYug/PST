//question 1:
//find second largest element from an array
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements
    }

    let largest = arr[0];
    let secondLargest;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// Example usage:
const array = [10, 5, 8, 12, 15, 7];
console.log(findSecondLargest(array));  // Output: 12
