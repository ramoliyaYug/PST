/*
Question 1: Grade Classification
Write a javascript program that takes a student's grade (as a percentage) and uses a "switch" case statement to classify it into a letter grade (A, B, C, D, F). The grading scale is:
A: 90% and above
B: 80% to 89%
C: 70% to 79%
D: 60% to 69%
F: Below 60%
Display the letter grade to the user.
*/

let studentGrade = 85;

switch (studentGrade) {
    case studentGrade >= 90:
        console.log("Letter Grade: A");
        break;
    case studentGrade >= 80:
        console.log("Letter Grade: B");
        break;
    case studentGrade >= 70:
        console.log("Letter Grade: C");
        break;
    case studentGrade >= 60:
        console.log("Letter Grade: D");
        break;
    default:
        console.log("Letter Grade: F");
}

/*
Question 2: Traffic Light Control
Create a program that simulates a traffic light system. The user inputs a color code (R for Red, Y for Yellow, G for Green), and the program uses a "switch" case statement to output the appropriate action:
Red: "Stop"
Yellow: "Get Ready"
Green: "Go"
For any other input, display "Invalid color code."
*/

let lightColour = "R";
switch(lightColour){
    case "R":
        console.log("Stop");
        break;
    case "Y":
        console.log("Get Ready");
        break;
    case "G":
        console.log("Go");
        break;
    default:
        console.log("Invalid color code.");
        break;
}

/*
Question 3: Age Group Classification
Create a program that classifies a person's age into different life stages. Ask the user to input their age and use if, else if, and else statements to classify and display:
"Child" for ages 0 to 12
"Teenager" for ages 13 to 19
"Adult" for ages 20 to 64
"Senior" for ages 65 and above
Display "Invalid age" for any negative age values.
*/

let userAge = 15;
if(userAge <= 12){
    console.log("Child");
} else if(userAge <= 19){
    console.log("Teenager");
} else if(userAge <= 64){
    console.log("Adult");
} else {
    console.log("Senior");
}

/*
Question 4: Shipping Calculator
Create a program that calculates shipping costs based on the shipping method selected. The user inputs a method code (S for Standard, E for Express, O for Overnight), and the program uses a "switch" case statement to display the cost:
Standard: Rs.5
Express: Rs.10
Overnight: Rs.20
For any other input, display "Invalid shipping method."
*/

let shippingMethod = "S";
switch(shippingMethod){
    case "S":
        console.log("Shipping Cost: Rs.5");
        break;
    case "E":
        console.log("Shipping Cost: Rs.10");
        break;
    case "O":
        console.log("Shipping Cost: Rs.20");
        break;
    default:
        console.log("Invalid shipping method");
}

/*
Question 5: Subscription Plans
Write a program that determines the monthly cost of a subscription plan based on the user's choice. The options are:
1. Basic Rs.9.99 per month
2. Standard Rs.14.99 per month
3. Premium Rs.19.99 per month
The user inputs a number corresponding to their choice, and the "switch" case statement displays the monthly cost. If the number is not between 1 and 3, display "Invalid plan."
*/

let subscriptionPlan = 2;
switch(subscriptionPlan){
    case 1:
        console.log("Monthly Cost: Rs.9.99");
        break;
    case 2:
        console.log("Monthly Cost: Rs.14.99");
        break;
    case 3:
        console.log("Monthly Cost: Rs.19.99");
        break;
    default:
        console.log("Invalid plan");
}
