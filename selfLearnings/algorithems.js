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

//using bitwise operator
// function isPowerOfTwo(num){
//     if(num<1){
//         return false;
//     }
//     return (num & (num - 1)) === 0;
// }

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
*/