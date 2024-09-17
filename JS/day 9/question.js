//1.print numbers from 1 to n
function printNumbers(n) {
    for(let i = 1; i <= n; i++) {
        console.log(i);
    }
}  

printNumbers(10);

//2.print even numbers using while loop
function printEvenNumbers(n) {
    let i = 0;
    while(i <= n) {
        if(i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}

printEvenNumbers(10);

//3. print odd numbers using do while loop
function printOddNumbers(n) {
    let i = 1;
    do {
        if(i%2!==0) {
            console.log(i);
        }
        i++;
    } while(i <= n);
}

printOddNumbers(10);

//4.reverse the value of array using decrement
function reverseArray(arr){
    let reversedArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));

//reversing the array using increament
function Array(array){
    let reverseArray=[];
    for (let i=0; i<=array.length-1; i++){
        reverseArray[i]=array[array.length-i-1];
    }
    return reverseArray;
}
console.log(Array([1,2,3,4,5]));

//5.print natural numbers from n to 1

function printNaturalNumbers(n) {
    for(let i = n; i >= 1; i--) {
        console.log(i);
    }
};

printNaturalNumbers(10);

//6.count the prime numbers between 1 to n
function againPrime(x){
    if (x<2){
        return false;
    }
    if (x==2){
        return true;
    }
        for (let z=2;z<=x/2;z++){
        if (x%z==0){
            return false;
        }
    }

    return true;
}

let count = 0
for(i = 0; i<=69; i++) {
    if(againPrime(i) == true){
        count += 1;
    }
    else{
        count += 0;
    }
};
console.log(count);

//7.
//8.check palindrome number without using methods


//9.find the average of the numbers given inside array
function findAvg(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum / num.length;
}

console.log(findAvg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//10.check number is composite or not

//11.print patterns