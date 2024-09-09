/*
1. Swapping Variables using a Third Variable
- Declare a variable x and assign it the value of 10.
- Declare another variable y an\nd assign it the value of 20.
- Now, swap the values of x and y using a third variable and print the results.
- Hint: Use a temporary variable to hold one of the values during the swap.
*/

let x = 10;
let y = 20;
let temporary = x;
x = y;
y = temporary;
console.log("After swapping the variables: x = " + x + ", y = " + y);

/*
2. Logging Multiple Variables
- Declare three variables: a, b, and c.
- Assign appropriate values to each and log them to the console.
*/

let a = 10;
let b = 20;
let c = 30;
console.log("a = " + a + "b = " + b + " \nc = " + c);

/*
3. Proper Naming Conventions
- Create three variables using proper naming conventions: one for storing a person's name, one for storing a person's age, and one for storing whether the person is a student or not.
- Example: let personName = "John Doe";
*/

let personName = "YUG RAMOLIYA";
let personAge = 17;
let isStudent = true;
console.log("Name: " + personName + " \nAge: " + personAge + " \nIs Student: " + isStudent);

/*
4. Favorite Color
- Declare a variable myFavoriteColor and set it to your favorite color.
- Change its value to another color and print both the original and new values.
*/

let myFavoriteColor = "Purple";
console.log("My Favorite Color: " + myFavoriteColor);
myFavoriteColor = "Magenta";
console.log("My New Favorite Color: " + myFavoriteColor);
