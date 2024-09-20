//for loop is used when we know the iteration 
//printing of table of 5
for (var i = 0; i <= 10 ; i++){
    console.log("5 x " + i + " = " + 5*i);
}

//sum of first 5 natural numbers
let sum = 0;
for(let i = 1 ; i <= 100 ; i++){
    sum += i;
};
console.log("Sum of first 5 natural numbers = " + sum);

//printing multiplication tables till 10 using nested loop  
for  ( let i = 1 ; i <= 10 ; i++){
    for(let j = 1 ; j <= 10 ; j++){
        console.log(i + " x " + j + " = " + i*j);
    };
};

//finding the factorial of a number
function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
};

//my way of finding the factorial of a number
function fact(num){
    let res = 1;
    for(i=1 ; i<=num; i++){
        res *= i;
    };
    return res;
};

//while loop: runs on the basis of true and false which is similar to writing the if elase condition.

let f=0
while(f<10){
    console.log(f);
    f++;
};

//printing even numbers till 20 using while loop

let h = 0;

while(h <= 20){
    if(h % 2 == 0){
        console.log(h);
    };
    h++;
};

/*
do while loop:
runs at least once and then checks the condition before executing the block.
*/

let j = 0;

do{
    console.log(j);
    j++;
}while(j < 10);


//for in loop:

let obj = {name: "John", age: 30, city: "New York"};
for(let key in obj){
    console.log(key + " = " + obj[key]);
};
//whenn we want to iterate over the objects we will use the for in loop

//for of loop:

let arr = [1, 2, 3, 4, 5];
for(let value of arr){
    console.log(value);
};
//when we don't want to work with indexe of array and we just want to use values then we use for of loop

let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}

//find even number in array using for of looop:
let array = [2,4,3,1,5,9,12]

for(let value of array){
    if(value%2 == 0){
        console.log(value);
    }
}
