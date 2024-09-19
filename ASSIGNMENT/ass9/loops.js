/*
Question 1:
Write a javascript program to print prime numbers from 2 to 30.
*/
function isPrime(num){
    if (num<2){
        return false;
    }
    if(num==2){
        return true;
    }
    for(let i=2; i<=num/2 ; i++){
    if (num%i==0){
        return false;
    }
    };
    return true;
}

for(let i=2; i<=30; i++){
    if(isPrime(i)==true){
        console.log(i);
    }
}

/*
Question 2:
Write a javascript program to check whether a number is available in an array or not.
*/
let arr = [1,2,3,4,5,6,7];
function isAvailable(checkNum){
    for(let i = 0;i<=arr.length-1;i++){
        if(arr[i] == checkNum){
           return true;
        }
    }
    return false;
};

console.log(isAvailable(6));
console.log(isAvailable(9));

/*
Question 3.
Write a javascript program to print the rank of students based on the percentage.
*/

function maxNum(percentStd1, percentStd2, percentStd3) {  
    if (percentStd1 > percentStd2 && percentStd1 > percentStd3) {
        console.log(percentStd1);
    }
    else if (percentStd2 > percentStd1 && percentStd2 > percentStd3) {
        console.log(percentStd2);
    }
    else {
        console.log(percentStd3);
    }
};

maxNum(90, 79, 89);