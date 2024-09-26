/*
Question 1: Takes object and return Array of keys
Write a function that takes an object as input and returns an array of all the keys where the value is a string.
*/

function getStringKeysWithoutFilter(obj){
    let arr = Object.keys(obj);
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof obj[arr[i]] == "string"){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

const input = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: 42
}

console.log(getStringKeysWithoutFilter(input));

/*
Question 2: Takes object and return a object where key and value swapped
Implement a function that takes an object and returns a new object with the keys and values swapped.
*/

function swapKeysAndValues(obj){
    let swapped = {};
    for(let key in obj){
        swapped[obj[key]] = key;
    }
    return swapped;
}

const input2 = {
    a:1,
    b:2,
    c:3
}

console.log(swapKeysAndValues(input2));

/*
Question 3: Bank account using closure
Implement a closure function to create a bank account that allows deposits, withdrawals, and checking balance
*/

function createBankAccount(initialBalance){
    let balance = initialBalance;

    return {
        deposit: function(amount){
            balance += amount;
            console.log(`Deposited ${amount}, new balance is ${balance}`);
        },
        withdraw: function(amount){
            if(balance >= amount){
                balance -= amount;
                console.log(`Withdrew ${amount}, new balance is ${balance}`);
            } else {
                console.log("Insufficient funds");
            }
        },
        checkBalance: function(){
            console.log(`Current balance is ${balance}`);
        }
    }
}

const account1 = createBankAccount(200);
account1.deposit(50);     // Output: "Deposited: 50, New Balance: 150"
account1.withdraw(30);    // Output: "Withdrew: 30, New Balance: 120"
account1.checkBalance();  // Output: "Current Balance: 120"
account1.withdraw(200);   // Output: "Insufficient funds"

const account2 = createBankAccount(500);
account2.deposit(80);     // Output: "Deposited: 80, New Balance: 580"
account2.withdraw(20);    // Output: "Withdrew: 20, New Balance: 560"
account2.checkBalance();  // Output: "Current Balance: 560"
account2.withdraw(300);   // Output: "Withdrew: 300, New Balance: 260"

/*
Question 4: Sum of single Digit
Write a function that takes a positive integer as input, and repeatedly sums its digits until the sum is a single digit. Use type casting where necessary.
*/

function sumOfSingleDigit(num){
    let sum = num;
    while(sum >= 10){
        sum = (sum % 10) + Math.floor(sum / 10);
    }
    return sum;
}

console.log(sumOfSingleDigit(12345)); //6
console.log(sumOfSingleDigit(987)); //6
console.log(sumOfSingleDigit(9999)); //9
console.log(sumOfSingleDigit(5)); //5
