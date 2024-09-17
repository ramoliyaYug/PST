// conditional flow

/*
control statements
-used to control the execution of a program baseed on some conditions

if statement:

if (condition) {
    if condition is true then this block of code will be executed otherwise the code will not be executed
} 
*/

let number =  4
if (number > 2) {
    console.log("Number is greater than 2");
    console.log("yeah i have executed the code");
}

/*
else statement

if (condition) {
    if condition is true then this block of code will be executed
    else {
        otherwise this block of code will be executed if the condition is false
    }
}
*/

let age = 19;
if (age<=18) {
    console.log("You are not eligible to vote");
}

else {
    console.log("You are eligible to vote");
}


/*
else if statement

if (condition1) {
    if condition1 is true then this block of code will be executed
    else if (condition2) {
        otherwise this block of code will be executed if condition1 is false and condition2 is true
    }
        else {
            otherwise this block of code will be executed if both condition1 and condition2 are false
        }
}
*/

//number is positive, negative or zero
let num = 0;
if(num > 0){
    console.log("Number is positive");
}

else if(num < 0){
    console.log("Number is negative");
}

else{
    console.log("Number is zero");
};

//check number is odd or even
let number1 = 7;
if(number1 % 2 == 0){
    console.log("Number is even");
}

else{
    console.log("Number is odd");
};


//rating
let rating = 3;
if (rating<2){
    console.log("bad");
}
else if(rating>4){
    console.log("good");
}
else{
    console.log("average");
}

/*
nested if else statements:

if (condition1) {
    if (condition1 is true then this block of code will be executed) {
    else {
    if (condition2) {
        this block of code will be executed if condition1 is true and condition2 is true
    }
        else {
        this block of code will be executed if condition1 is true and condition2 is false
        }
    }
        else {
    this block of code will be executed if condition1 is false 
*/

//question 1:

let marks =  50;
if (marks >40){
    if(marks >= 80){
        console.log("distinction");
    }
    else{
        console.log("you are passed but didn't got distinction")
    }
}
else{
    console.log("fail ho gaye");
}

/*
switch statement:
-use when there is lots of conditions in the code

switch (expression) {
    case value1:
        code block
        break;
    case value2:
        code block
        break;
    default:
        default code block
}

*/ 

let  day = 10;
day = day%7;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday");
        break;
}

//mystery of switch(true)
/*
-switch (true) hum tab use karte hai jab hume variable mai alag datatype de rakhi ho and hame case mai alag datatype compare karni ho tab hum switch(true) use karte hai
-like variable mai number hai and case mai boolean condition check jkarni ho to hum jo bhi value switch ke argument mao pass karege wo wala case check hoga agar false hoga to false wali condition check hogi and true hoga to true
*/