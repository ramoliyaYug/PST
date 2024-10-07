/*
Question 1: : Library Book Organizer
You are managing a library system that keeps track of books. Each book has the following properties:
title (string)
author (string)
categories (array of strings representing different genres)
isAvailable (boolean)
Create an object called Book and print the output in the Vs code terminal.
*/
let book1 = {
    title: "Meditations",
    author: "Marcus Aurelius",
    categories: ["Classic", "Philosophy"],
    isAvailable: true,
}

let book2 = {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    categories: ["Science", "Psychology"],
    isAvailable: false,
}
/*
Question 2 :
Refer question number 1 for the object and console the Second item in categories (1st index value of categories).
*/

console.log(book1.categories[1]);
console.log(book2.categories[1]);
/*
Question 3:
Explain the Difference between push and unshift in an Array and show it practically how it works.

Answer:
push:
- It adds a new element to the end of an array and returns the new length of the array.
- Used to store collections of related data.
*/
const startUp = ["Classplus", "Udemy", "Duolingo", "Byju's"];

console.log(startUp);

startUp.push("Unacademy");

console.log(startUp);
/*
Question 4:
Explain the difference between Object and Array and also explain where it is used in real-life scenarios.

Answer:
Object:
-An object in JavaScript is a collection of key-value pairs, where each key (or property) is a unique string, and each value can be of any data type (e.g., string, number, array, or even another object).
-it is used to represent an entry with different attributes.
-ex. : use to store different data of user's linked in profile like connections, name, email, skills, bio, education

Array:
An array is an ordered list of values, where each value is identified by its index (starting from 0). The values can be of any data type, but arrays are typically used to store multiple items of the same type.
-Used to store collections of related data.
-ex. : in shopping website orders arrays stores the products which is purchased by user
*/
