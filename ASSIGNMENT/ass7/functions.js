/*
Question 1:
Create a function named isEligibleForDiscount that takes these two parameters:
hasMembership (boolean) and
totalPurchase (number)
Implement the function to determine if a customer is eligible for a discount. The eligibility for discount depends on whether the customer has a membership as well as if their total purchase is greater than $100. Only when a customer meets both of these conditions, he/she is eligible for a discount. Return true if the given customer is eligible for discount else return false.
*/

function isEligibleForDiscount(hasMembership, totalPurchase) {
    if (hasMembership && totalPurchase > 100) {
        return true;
    } else {
        return false;
    }
};

console.log(isEligibleForDiscount(true, 120)); // Output: true
console.log(isEligibleForDiscount(false, 90)); // Output: false

/*
Question 2:
Imagine you're writing code for a timer that starts from 0 and increments every second. Write a function calculateTimeInSeconds that takes three parameters: hours, minutes, and seconds. Calculate and return the total time in seconds.
*/

function calculateTimeInSeconds(hours, minutes, seconds) {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    return totalSeconds;
};

console.log(calculateTimeInSeconds(1, 2, 3)); // Output: 3753

/*
Question 3:
You're building a calculator app. Create a function calculateBMI that takes two parameters: weight (in kilograms) and height (in meters). Calculate and return the Body Mass Index (BMI) using the formula: BMI = weight / (height * height).
*/

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
};

console.log(calculateBMI(70, 1.75)); // Output: 22.857

/*
Question 4:
You're developing a game. Implement a function calculateFinalScore that takes three parameters: kills, objectives, and time (all integers). Calculate and return the final score using the formula: score = kills * 100 + objectives * 50 - time * 10.
*/

function calculateFinalScore(kills, objectives, time) {
    let score = kills * 100 + objectives * 50 - time * 10;
    return score;
};

console.log(calculateFinalScore(10, 3, 120)); //output: -50
console.log(calculateFinalScore(100, 30, 20)); //output: 11300
