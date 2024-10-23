/*
cheat sheet to find the time complexity of the algorithm:

1. calculation not depended on the input size then it will be the constant time complexity so its Big-O notation is O(1).

2.for oop and all it has linear time complexity so its Big-O notation is O(n).

3.if the input size increases with the time then  if there is the nested loop then it has time complexity of quadratic so its Big-O notation is O(n^2).

4.if the input size reduces by the half then it has the logarithemic tome complexity so its Big-O notation is O(log(n)).
*/

//find the fibbonacci sequence till the given number and find the time complexity of that algorithm
function fiboo(n) {
  let fib = [0, 1];
  for (let i = 0; i <= n - 3; i++) {
    if (fib[i] < n) {
      fib.push(fib[i] + fib[i + 1]);
    }
  }
  return fib;
}

console.log(fiboo(5));
console.log(fiboo(7));
//as we use the for loop here so it has time complexity as linear Big-O of this algorithm is O(n)

//find the factorial of the given number and find the time complexity of that algorithm
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(7));
//here we have used the for loop aso it has time complexity linear so its Big-O is O(n).

//check the number is prime or not return true if it is and return false if it is not and find time complexity of algorithm
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(1);
console.log(5);
console.log(4);
//here we have used the for loop and square root function so it has time complexity as squreroot so its Big-O is O(sqrt(n)).

//check if given number is power of two or not

//my way of doing this problem
// function isPowerOfTwo(num) {
//   if (num == 0) {
//     return false;
//   }
//   for (let i = 1; i <= num; i++) {
//     if (Math.pow(2, i) == num) {
//       return true;
//     }
//   }
//   return false;
// }

//another way of doing this problem
// function isPowerOfTwo(num){
//     if(num<1){
//         return false;
//     }
//     while(num>1){
//         if(num%2!==0){
//             return false;
//         }
//         num /= 2
//     }
//     return true;
// }

// using bitwise operator
function isPowerOfTwo(num){
    if(num<1){
        return false;
    }
    return (num & (num - 1)) === 0;
}

console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(24))
console.log(isPowerOfTwo(512))
//here we have used the bitwise operator so it has time complexity as O(1).
//but if we use the while loop method then its time complexity is Big-O=O(log(n))
//and if we use the for loop method then it has linear time complexity O(n) so i wrote the worst code lol. 
//so bitwise is the best sol for this

/*
concept of recursion
- recursion is the problem solving technique where solution is depend on solutions to smaller instances of the same problem
- recursion is when a function calls itself

few points about recursion:
- every recursive solution need to have a base case - a condition to terminate the recursion
- recusion might simplify solving problem but it does not transfer to a faster solution. A recursive solution may be far worse compare to an iterative solution.

-break the problem into smaller base cases and then solve via recursion.
*/

//given the number n find the nth element of fibbonacci sequence then find the time complexity
function recusiveFibonacci(n){
  if(n<2){
    return n;
  }
  return recusiveFibonacci(n-1) + recusiveFibonacci(n-2);
}
// time complexity of the recursion fibbonacci sequence is the quadratic Big-O of this is O(n^2)

// given the number n find the factorial of it using recursion
function recursiveFibonacci(n){
  if(n === 0){
    return 1;
  }
  return n * recursiveFibonacci(n-1);
}
// time complexity of recursive factorial is linear so Big-O is O(n)

/*
search algorithms:

1. linear search:
2. binary search:
3. recursive binary search:
*/

//linear search:
// given the array of n elements and a target element t find the target element t in the array. return -1 if the target element is not found. then find the time complexity.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
// time complexity of linear search is linear so Big-O is O(n)

//binary search:
/*
-given a sorted array and a target element t find the target element t in the array. return -1 if the target element is not found. then find the time complexity.

binary search psuedocode:
- if array is empty then return -1 as the element is not found
- if array haas element then find the mid element of the array,if taarget is equal to mid element then return the mid element index.
- if target is less than mid element then binary search left half of the array
- if target is greater than mid element then binary search right half of the array
*/

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while(leftIndex <= rightIndex) {
    let midIndex = Math.flor((leftIndex + rightIndex) / 2);
    if(target === arr[midIndex]) {
      return midIndex;
    }
    if(target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
}
// time complexity of binary search is log(n) so Big-O is O(log(n))

//recursive binary search:
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if(leftIndex > rightIndex) {
    return -1;
  }

  let midIndex = Math.floor((leftIndex + rightIndex) / 2);

  if(target === arr[midIndex]) {
    return midIndex;
  } 

  if(target < arr[midIndex]) {
    return search(arr, target, leftIndex, midIndex - 1);
  } else {
    return search(arr, target, midIndex + 1, rightIndex);
  }
}
// time complexity of recursive binary search is log(n) so Big-O is O(log(n))

/*
sorting algorithms:

1. bubble sort:
2. insertion sort:
3. quick sort:
4. merge sort:
*/

/*
bubble sort:

- compare the adjusent elements of the array and swap the position if they are not in the intended order
- repear the instruction as you step through each element in array
- once you step through whole array without swapping the array has been sorted
*/

function bubbleSort(arr) {
  let swapped;

do {
  swapped = false;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i]>arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
} while (swapped);
}
//Big-O is O(n^2) cuzz nested loops


/*
insertion sort:

- virtually split the array in the sorted and unsorted arrays
- assume that the first element of the array is sorted ans rest is unsorted
- select the unsorted element and compare with all eloement in the sorted part
- if element in sorted part is smaller than the selected element, proceed to the next element in the unnsorted part, else shift the element in the sorted part to the right
- insert the selected element in the right index
- repeat untill all of the unsorted elements are placed in the right order
*/

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numbersToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numbersToInsert){ 
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numbersToInsert;
  }
  return arr; 
}

const arr = [8, 20, -2, 4, -6];
console.log(insertionSort(arr));
//here we have used the for loop and while loop in nested formate so its time complexity is quadratic so Big-O is O(n^2)

/*
Quick sort:
- first of all identify the pivot elements
1. first element
2. last element (our approach)
3. random element
4. median element

- put everything which is smaller than pivot into left and grater than pivot into the right array
- repeat the process for the indivisual left and right for untill you have an array of length 1.
- repetedly concate the left array pivot and the right array till the sorted left 
*/

function quickSort(arr){
  if(arr.length<2){
    return arr;
  }
  let pivot = arr[arr.length -1];
  let left =[];
  let right = [];
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] <= pivot){
      left.push(arr[i]);
    }else {
      right.push(arr[i]);
    } 
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
//the quick sort is using recursion so it has teo time complexities the worst case and the average case
// its worst case time complexity is O(n^2) and it happens when you try to sort an sorted array and why anyone probably sort the sorted array
//but its average case time complexity is O(nlog(n)) cuzz we are half the input every time
//the quick sort is used everywhere and it is consider as the best sort algorithm

/*
merge sort:
- divide array into subarray, each containing one element(an array with one element is considered as sorted)
- repeatly merge the subarray to produce  new sorted subarray untill there is only one subarray remaining. that will be sorted array.
*/

function mergeSort(arr){
 if(arr.length<2){
   return arr;
 }
 const mid = Math.floor(arr.length/2);
 let leftArr = arr.slice(0, mid);
 let rightArr = arr.slice(mid);
 return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
  const sortedArr =  [];
  while(leftArr.length && rightArr.length){
    if(leftArr[0] <= rightArr[0]){
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr,...leftArr,...rightArr];
}
//Big-O of this algorithm is O(nlogn)

//cross product or a cartesian product problem
//given two finite non-empty set find their cartesian producte
function cartesianProduct(arr1, arr2){
  let result= [];
  for(let i=0; i<arr1.length; i++){
    for(let j=0;j<arr2.length;j++){
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

console.log(cartesianProduct([1,2],[3,4,5]));
//Big-O O(mn)

//climbing staricase problem:
//given a staircase of n steps, count the number of ways to distinct ways to climb to the top. you can either climb 1 or 2 steps at once
//basic idea on this problem:
//if you have to climb one or two steps at a time the way we can climb from step is n-1 or n-2, so the calculate the way to climb n-1 and n-2 steps and then add them
//climbingStaircase(n)=climbingStaircasr(n-1)+climbingStaircase(n-2)

function climbingStaircase(n){
  let noOfWays = [1,2];
  for(let i=2; i<=n; i++){
    noOfWays[i] = noOfWays[i-1]+noOfWays[i-2];
  }
  return noOfWays[n-1]
}
//Big-O O(n) linear time complexity

//tower of hanoi problem:
//only one disc is moved at once
//each move consist of taking upper disk from one of the stacks and placing it on the top of the another stack or on an empty rod
//no dis is placed on top of a disc that is smaller
//basic idea on this problem:
//shift n-1 disc from A to B using C (when required)
//shift last disc from A to C
//shift n-2 disc from B to C using A (when required)
function towerOfHanoi(n, fromRod, toRod, usingRod){
  if(n === 1){
    console.log(`Move disc 1 from ${fromRod} to ${toRod}`)
    return;
  }
  towerOfHanoi(n-1, fromRod, usingRod, toRod);
  console.log(`Move disc ${n} from ${fromRod} to ${toRod}`)
  towerOfHanoi(n-1, usingRod, toRod, fromRod);
}

//Big-O O(2^n) exponential time complexity 